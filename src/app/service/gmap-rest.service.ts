import { LocInfo } from './../model/loc-info';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Path } from '../model/path';
declare var jquery: any;
declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class GMapRestService {
  public static KEY_GMAP_KEY = 'gmap-api-key';
  constructor(
    private httpClient: HttpClient
  ) { }

  public injectElevation(locs: Array<LocInfo>): void {
    const spLocs = this.splitWaypoints(locs);
    for (const ls of spLocs) {

    }
  }

  public async fetchPaths(locs: Array<LocInfo>): Promise<Array<Path>> {
    const spLocs = this.splitWaypoints(locs);
    const ans: Array<Path> = [];
    for (const blocs of spLocs) {
      await this.fetchPathFromGmap(blocs);
    }
    return ans;
  }

  private fetchPathFromGmap(points: Array<LocInfo>): void {
    const origin = points[0].getPointPram();
    const waypoints = this.genWaypointsPram(points);
    const mode = 'bicycling';
    const destination = points[points.length - 1].getPointPram();
    const key = sessionStorage.getItem(GMapRestService.KEY_GMAP_KEY);
    const link = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&waypoints=' + waypoints + '&mode=' + mode + '&destination=' + destination + '&key=' + key;




    this.httpClient.get<object>(link).subscribe(res => {
      console.log(JSON.stringify(res));
    });



  }

  private genWaypointsPram(points: Array<LocInfo>): string {
    let ans = '';
    for (let i = 1; i < points.length - 1; i++) {
      const sp = i === 1 ? '' : ' | ';
      ans += sp + points[i].getPointPram();
    }
    return ans;
  }

  private splitWaypoints(points: Array<LocInfo>): Array<Array<LocInfo>> {
    const ans = [];
    ans.push([]);
    let arIdx = 0;
    for (let i = 1; i < points.length - 1; i++) {
      const oary = ans[arIdx];
      oary.push(points[i]);
      if (oary.length >= 10) {
        arIdx++;
        ans.push([]);
      }
      if (ans.length > 3) {
        break;
      }
    }
    return ans;
  }

}
