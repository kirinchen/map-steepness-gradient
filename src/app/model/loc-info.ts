import { Waypoint } from './../service/gmap-rest.service';
declare let google: any;
export class LocInfo {

  public latitude: number;
  public longitude: number;
  public elevation = -999999;
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

  public eq(lat: number, lng: number): boolean {
    const dist = Math.sqrt(Math.pow((this.latitude - lat), 2) + Math.pow((this.longitude - lng), 2));
    return dist < 100;
  }

  public isCompleteElevation(): boolean {
    return this.elevation > -999999;
  }



}
