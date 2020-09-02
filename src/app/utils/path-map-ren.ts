import { LocInfo } from './../model/loc-info';
import { Path } from '../model/path';

declare var jquery: any;
declare let $: any;
declare let google: any;

export class PathMapRen {

  public static DOT = [
    'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
     'http://maps.google.com/mapfiles/ms/icons/pink-dot.png',
    'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
     'http://maps.google.com/mapfiles/ms/icons/purple-dot.png',
  ];

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

    const ans = new Array<any>();
    const stmarker = this.genMark(true, i);
    const edmarker = this.genMark(false, i);

    return ans;
  }

  private genMark(sted: boolean, i: number): any {
    const p = this.paths[i];
    const icIdx = i % PathMapRen.DOT.length;
    const iconU = PathMapRen.DOT[icIdx];
    const mk = new google.maps.Marker({
      position: p.end.getLatLng(),
      map: this.map,
      label: sted ? ' start' : 'end',
      icon: {
        url: iconU
      }
    });
    const infowindow = this.genInfoWin(sted, i);
    mk.addListener('click', () => {
      infowindow.open(this.map, mk);
    });
  }


  private genInfoWin(sted: boolean, i: number): any {
    const ans = new google.maps.InfoWindow({
      content: this.genInfoContent()
    });
    return ans;
  }
  private genInfoContent(): string {
    return 'Test';

  }

}

export enum MarkDot {

}
