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
    private config: ConfigService
  ) { }

  ngOnInit(): void {
    this.gmapApiKey = this.config.loadGmapKey();
  }

  public save(): void {
    this.config.saveGmapKey(this.gmapApiKey);
  }

}
