import { StringUtils } from './../utils/string-utils';
import { LanguageService } from './../service/language.service';
import { ToastInfo, ToastService } from './../service/toast.service';
import { ConfigService } from './../service/config.service';
import { Component, OnInit } from '@angular/core';
import { GMapRestService } from '../service/gmap-rest.service';
import { Router } from '@angular/router';
import { CommUtils } from '../comm-utils';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {



  public gmapApiKey: string;
  public minPathDist: number;
  public selLang: string;

  constructor(
    private config: ConfigService,
    private toast: ToastService,
    public language: LanguageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gmapApiKey = this.config.loadGmapKey();
    this.minPathDist = this.config.loadPathMinDist(15);
    this.selLang = this.language.getSaveLang().value;
  }

  public async save(): Promise<void> {
    await this.toast.twinkle({
      msg: 'it`s done',
      title: 'OK'
    });
    if (!StringUtils.isBlank(this.gmapApiKey)) { this.config.saveGmapKey(this.gmapApiKey); }
    this.config.savePathMinDist(this.minPathDist);
    this.language.saveLang(this.language.findByVal(this.selLang));
    this.router.navigate(['load']);
    await CommUtils.delay(200);
    location.reload();
  }

}
