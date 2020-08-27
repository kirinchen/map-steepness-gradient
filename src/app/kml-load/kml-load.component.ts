import { ToastService } from './../service/toast.service';
import { GMapRestService } from './../service/gmap-rest.service';
import { CurPathsService } from './../service/cur-paths.service';
import { LocInfo } from './../model/loc-info';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kml-load',
  templateUrl: './kml-load.component.html',
  styleUrls: ['./kml-load.component.css']
})
export class KmlLoadComponent implements OnInit {
  public static KEY_LAST_DATA = 'last-kml';

  public kmlText: string;


  constructor(
    private router: Router,
    private curPaths: CurPathsService,
    private toast: ToastService
  ) { }

  async ngOnInit(): Promise<void> {
    this.kmlText = localStorage.getItem(KmlLoadComponent.KEY_LAST_DATA);

  }

  public async loadText(): Promise<void> {
    this.toast.show({
      msg: 'done',
      title: 'OK'
    });
    const parser = new DOMParser();
    const xml = parser.parseFromString(this.kmlText, 'text/xml');
    const tags = xml.getElementsByTagName('coordinates');
    const list = this.parseLocs(tags);
    await this.curPaths.setData(list);
    localStorage.setItem(KmlLoadComponent.KEY_LAST_DATA, this.kmlText);

  }

  private parseLocs(tags: HTMLCollectionOf<Element>): Array<LocInfo> {
    let ans = new Array<LocInfo>();
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < tags.length; j++) {
      const item = tags[j];
      const bundle = item.innerHTML;
      const blist = this.parseLocsByRows(bundle);
      ans = ans.concat(blist);
    }
    return ans;
  }

  private parseLocsByRows(bundle: string): Array<LocInfo> {
    const ans = new Array<LocInfo>();
    const rows = bundle.split(',0');
    for (const row of rows) {
      const ls = row.split(',');
      ans.push(new LocInfo(ls[1], ls[0]));
    }
    return ans;

  }

}
