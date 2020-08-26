import { ToastInfo, ToastService } from './../service/toast.service';
import { ConfigService } from './../service/config.service';
import { Component, OnInit } from '@angular/core';
import { GMapRestService } from '../service/gmap-rest.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  public gmapApiKey: string;

  constructor(
    private config: ConfigService,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.gmapApiKey = this.config.loadGmapKey();
  }

  public async save(): Promise<void> {
    await this.toast.twinkle({
      msg: 'it`s done',
      title: 'OK'
    });
    this.config.saveGmapKey(this.gmapApiKey);
    location.reload();
  }

}
