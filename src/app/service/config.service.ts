import { StringUtils } from './../utils/string-utils';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public static KEY_MIN_PATH_DIST = 'min-path-distance';
  public static KEY_GMAP_KEY = 'gmap-api-key';

  constructor() { }

  public saveGmapKey(k: string): void {
    localStorage.setItem(ConfigService.KEY_GMAP_KEY, k);
  }

  public loadGmapKey(): string {
    return localStorage.getItem(ConfigService.KEY_GMAP_KEY);
  }

  public existGmapkey(): boolean {
    return !StringUtils.isBlank(this.loadGmapKey());
  }

  public savePathMinDist(v: number): void {
    localStorage.setItem(ConfigService.KEY_MIN_PATH_DIST, v + '');
  }

  public loadPathMinDist(dv: number): number {
    const vs = localStorage.getItem(ConfigService.KEY_MIN_PATH_DIST);
    if (StringUtils.isBlank(vs)) { return dv; }
    const lv = parseFloat(vs);
    if (lv > 3) { return lv; }
    return dv;
  }






}
