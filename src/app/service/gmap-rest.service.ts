import { LocInfo } from './../model/loc-info';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GMapRestService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public injectElevation(locs: Array<LocInfo>): void {

  }
}
