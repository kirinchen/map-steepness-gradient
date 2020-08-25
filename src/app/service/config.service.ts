import { StringUtils } from './../utils/string-utils';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public static KEY_GMAP_KEY = 'gmap-api-key';

  constructor() { }

  public saveGmapKey(k: string): void {
    sessionStorage.setItem(ConfigService.KEY_GMAP_KEY, k);
  }

  public loadGmapKey(): string {
    return sessionStorage.getItem(ConfigService.KEY_GMAP_KEY);
  }

  public existGmapkey(): boolean {
    return !StringUtils.isBlank(this.loadGmapKey());
  }



}
