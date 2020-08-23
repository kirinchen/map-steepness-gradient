import { GMapRestService } from './gmap-rest.service';
import { LocInfo } from './../model/loc-info';
import { Path } from './../model/path';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurPathsService {


  public paths: Array<Path> = [];
  constructor(
    private gmapRestService: GMapRestService
  ) { }

  public async setData(list: LocInfo[]): Promise<void> {
    this.gmapRestService.fetchPaths(list);
    //to fix by loc height https://script.google.com/a/domiearth.com/d/1tyavcD24L1zPm1vPa6BwmWK0tIE7iHz3h5a39fxa--k3jXae-30cxT9Y/edit?mid=ACjPJvGwQ6vtQLWyVhAn-Y1FCthdS0msnPVhe_OuRF2aLHwhYJRlrezYIh_pSiCMCVg5N6HJ7jKAaG9pd5ECoJsABhQ7I_n_N6rMwrZ9QO-oyGGNT5GdfzIeILSGNGyr8E54TK32PCxjKQ&uiv=2
    // let cp = new Path();
    // for (const l of list) {
    //   if (!cp.start) {
    //     cp.setStart(l);
    //   } else if (!cp.end) {
    //     cp.setEnd(l);
    //   } else {
    //     throw new Error('not posible');
    //   }
    //   if (cp.isComplete()) {
    //     this.paths.push(cp);
    //     cp = new Path();
    //   }
    // }
  }



  private injectGmapInfo(list: LocInfo[]): void {

  }
}
