import { LocInfo } from './../model/loc-info';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kml-load',
  templateUrl: './kml-load.component.html',
  styleUrls: ['./kml-load.component.css']
})
export class KmlLoadComponent implements OnInit {



  public kmlText: string;

  constructor(
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {

  }

  public loadText(): void {
    const parser = new DOMParser();
    const xml = parser.parseFromString(this.kmlText, 'text/xml');
    const tags = xml.getElementsByTagName('coordinates');
    this.parseLocs(tags);
  }

  private parseLocs(tags: HTMLCollectionOf<Element>): Array<LocInfo> {
    let ans = new Array<LocInfo>();
    // tslint:disable-next-line: prefer-for-of
    for (let j = 0; j < tags.length; j++) {
      const item = tags[j];
      const bundle = item.innerHTML;
      const rows = bundle.split('\n\t');


    }
  }

  private parseLocsByRows(b: string): void {

  }

}
