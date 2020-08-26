import { Waypoint } from './../service/gmap-rest.service';
declare let google: any;
export class LocInfo {

  public latitude: number;
  public longitude: number;
  public elevation: number;
  public constructor(lat: string, lng: string) {
    this.latitude = parseFloat(lat);
    this.longitude = parseFloat(lng);

  }

  public getPointStr(): string {
    return this.latitude + ' , ' + this.longitude;
  }

  public getWaypoint(): Waypoint {
    return {
      stopover: true,
      location: this.getLatLng()
    };
  }

  public getLatLng(): any {
    return new google.maps.LatLng(this.latitude, this.longitude);
  }

}
