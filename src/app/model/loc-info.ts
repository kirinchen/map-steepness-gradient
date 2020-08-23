export class LocInfo {

  public latitude: number;
  public longitude: number;
  public elevation: number;
  public constructor(lat: string, lng: string) {
    this.latitude = parseFloat(lat);
    this.longitude = parseFloat(lng);

  }

  public getPointPram(): string {
    return this.latitude + ' , ' + this.longitude;
  }

}
