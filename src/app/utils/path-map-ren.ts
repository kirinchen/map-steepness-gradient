import { async } from '@angular/core/testing';
import { LanguageService } from './../service/language.service';
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
  private language: LanguageService;

  private constructor(l: LanguageService) {
    this.language = l;
  }

  public static build(l: LanguageService): PathMapRen {
    return new PathMapRen(l);
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

    const a = async () => {
      const infowindow = await this.genInfoWin(sted, i);
      mk.addListener('click', () => {
        infowindow.open(this.map, mk);
      });
    };
    a();
    return mk;
  }


  private async genInfoWin(sted: boolean, i: number): Promise<any> {
    const ans = new google.maps.InfoWindow({
      content: await this.genInfoContent(sted, i)
    });
    return ans;
  }


  private async genInfoContent(sted: boolean, i: number): Promise<string> {
    const p = this.paths[i];
    const l = sted ? p.start : p.end;
    const prs = sted ? 'start' : 'end';
    const hText = await this.language.getI18n('Height');
    const dText = await this.language.getI18n('Dinstance');
    const sText = await this.language.getI18n('Gradients_Angle');
    const opText = await this.language.getI18n('OpenGmap');
    const locs = `<li class="alert alert-primary ">${prs}:${l.getPointStr()} </li>`;
    const elstr = `<li class="list-group-item">${hText}:${l.elevation.toFixed(2)} </li>`;
    const distr = `<li class="list-group-item">${dText}:${p.distance.toFixed(2)} </li>`;
    const degstr = `<li class="list-group-item">${sText}:${p.getGradient().toFixed(2)} / ${p.getAngleDeg().toFixed(2)} </li>`;
    const gmapLink = 'https://maps.google.com/?q=' + l.getPointStr();
    const opmap = `<a href="${gmapLink}"  target= _blank type="button list-group-item" class="btn btn-primary">${opText}</a>`;
    const html = `<ul class="list-group"> ${locs}  ${distr} ${elstr}  ${degstr} ${opmap}    <li class="list-group-item"></li>  </ul>`;
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
