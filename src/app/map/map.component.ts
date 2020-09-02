import { PathMapRen, MarkerBd } from './../utils/path-map-ren';
import { CurPathsService } from './../service/cur-paths.service';
import { CommUtils } from './../comm-utils';
import { Component, OnInit } from '@angular/core';
import * as renData from '../../assets/json/test-ren.json';
import { Path } from '../model/path';

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
  markers = new Array<MarkerBd>();

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
      case DrawMode.NONE:
        this.clear();
        return;
      case DrawMode.ALL_PATH:
        this.drawAllPaths();
        return;
      case DrawMode.SELECTED:
        this.drawSelPaths();
        return;
        return;

    }
  }

  public setMode(m: DrawMode): void {
    this.mode = m;
    this.draw();
  }

  private drawAllPaths(): void {
    this.drawPaths(this.curPaths.pathsInfo.paths);
  }

  private drawSelPaths(): void {
    const ps = this.curPaths.pathsInfo.paths.filter(p => p.selected);
    this.drawPaths(ps);
  }

  private clear(): void {
    this.markers.forEach(m => m.removeMe());

  }

  private drawPaths(ps: Array<Path>): void {
    this.clear();
    this.markers = PathMapRen.build().setPaths(ps).draw(this.map);
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
