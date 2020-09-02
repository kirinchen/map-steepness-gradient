import { Path } from '../model/path';

declare var jquery: any;
declare let $: any;
declare let google: any;

export class PathMapRen {

  private paths: Array<Path>;
  private map: any;

  public static build(): PathMapRen {
    return new PathMapRen();
  }

  public setPaths(ps: Array<Path>): PathMapRen {
    this.paths = ps;
    return this;
  }

  public draw(m: any): void {
    this.map = m;
    for (let i = 0; i < this.paths.length; i++) {
      this.genMarkByIdx(i);
    }
    this.map.setCenter(this.paths[0].start.getLatLng());
  }



  private genMarkByIdx(i: number): Array<any> {
    const p = this.paths[i];
    const ans = new Array<any>();
    const stmarker = new google.maps.Marker({
      position: p.start.getLatLng(),
      map: this.map,
      label: i + '>start'
    });
    const edmarker = new google.maps.Marker({
      position: p.end.getLatLng(),
      map: this.map,
      label: i + '>end'
    });

    return ans;
  }

}
