import { GMapRestService, PathBundle } from './gmap-rest.service';
import { LocInfo } from './../model/loc-info';
import { Path } from './../model/path';
import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class CurPathsService {

  public static KEY_LAST_DATA = 'last-data';
  public pathsInfo = new PathBundle();
  constructor(
    private gmapRestService: GMapRestService
  ) {
    const ls = localStorage.getItem(CurPathsService.KEY_LAST_DATA);
    const ino = JSON.parse(ls);
    this.pathsInfo = plainToClass(PathBundle, ino);
    console.log(this.pathsInfo);
  }

  public async setData(list: LocInfo[], initCb: (size: number) => void, curCb: (i: number) => void): Promise<void> {
    this.pathsInfo = await this.gmapRestService.fetchPaths(list, initCb, curCb);
    localStorage.setItem(CurPathsService.KEY_LAST_DATA, JSON.stringify(this.pathsInfo));
  }

  public existData(): boolean {
    return this.pathsInfo.paths.length > 0;
  }



  private injectGmapInfo(list: LocInfo[]): void {

  }
}
