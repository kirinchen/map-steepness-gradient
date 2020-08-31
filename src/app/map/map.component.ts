import { CurPathsService } from './../service/cur-paths.service';
import { CommUtils } from './../comm-utils';
import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';
import * as renData from '../../assets/json/test-ren.json';

declare var jquery: any;
declare let $: any;
declare let google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  mode = DrawMode.NONE;
  DrawMode = DrawMode;
  map: any;
  constructor(
    private curPaths: CurPathsService
  ) { }

  async ngOnInit(): Promise<void> {
    await CommUtils.delay(1000);
    this.map = await new google.maps.Map(document.getElementById('map'), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
    this.draw();

  }


  public draw(): void {
    switch (this.mode) {
      case DrawMode.NONE: return;
      case DrawMode.ALL_PATH:
        this.drawPaths();
        return;
      case DrawMode.SELECTED:
        // TODO
        return;

    }
  }

  public setMode(m: DrawMode): void {
    this.mode = m;
    this.draw();
  }

  private drawPaths(): void {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);
    this.curPaths.pathsInfo.response.forEach(r => {
      console.log(JSON.stringify(r));
      directionsRenderer.setDirections(r);
    });
  }

  public drawTest(): void {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(this.map);
    const j = JSON.stringify(renData);
    directionsRenderer.setDirections(JSON.parse(j).default);
  }

}

export enum DrawMode {
  NONE, SELECTED, ALL_PATH
}
