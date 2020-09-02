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

  public draw(m: any): Array<MarkerBd> {
    let ans = new Array<MarkerBd>();
    this.map = m;
    for (let i = 0; i < this.paths.length; i++) {
      ans = ans.concat(this.genMarkByIdx(i));
    }
    this.map.setCenter(this.paths[0].start.getLatLng());
    return ans;
  }



  private genMarkByIdx(i: number): Array<MarkerBd> {

    const ans = new Array<MarkerBd>();
    const stmarker = this.genMark(true, i);
    const edmarker = this.genMark(false, i);
    ans.push(new MarkerBd(stmarker));
    ans.push(new MarkerBd(edmarker));
    return ans;
  }

  private genMark(sted: boolean, i: number): any {
    const p = this.paths[i];
    const icIdx = i % PathMapRen.DOT.length;
    const iconU = PathMapRen.DOT[icIdx];
    const mk = new google.maps.Marker({
      position: sted ? p.start.getLatLng() : p.end.getLatLng(),
      map: this.map,
      label: sted ? 'S' : 'E',
      icon: {
        url: iconU
      }
    });
    const infowindow = this.genInfoWin(sted, i);
    mk.addListener('click', () => {
      infowindow.open(this.map, mk);
    });
    return mk;
  }


  private genInfoWin(sted: boolean, i: number): any {
    const ans = new google.maps.InfoWindow({
      content: this.genInfoContent(sted, i)
    });
    return ans;
  }


  private genInfoContent(sted: boolean, i: number): string {
    const p = this.paths[i];
    const l = sted ? p.start : p.end;
    const prs = sted ? 'start' : 'end';
    const locs = `<li class="alert alert-primary ">${prs}:${l.getPointStr()} </li>`;
    const elstr = `<li class="list-group-item">Height:${l.elevation.toFixed(2)} </li>`;
    const degstr = `<li class="list-group-item">Steepness:${p.getAngleDeg().toFixed(2)} </li>`;
    const gmapLink = 'https://maps.google.com/?q=' + l.getPointStr();
    const opmap = `<a href="${gmapLink}"  target= _blank type="button list-group-item" class="btn btn-primary">Open Gmap</a>`;
    const html = `<ul class="list-group"> ${locs}  ${elstr} ${degstr} ${opmap}    <li class="list-group-item"></li>  </ul>`;
    return html;

  }

}

export class MarkerBd {

  maker: any;

  constructor(m: any) {
    this.maker = m;
  }

  public removeMe(): void {
    this.maker.setMap(null);
  }



}
