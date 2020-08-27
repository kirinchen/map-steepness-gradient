import { LocInfo } from './loc-info';
import { Type } from 'class-transformer';
import 'reflect-metadata';
export class Path {

  @Type(() => LocInfo)
  public start: LocInfo;
  @Type(() => LocInfo)
  public end: LocInfo;
  public distance: number;

  public setStart(s: LocInfo): void {
    this.start = s;
  }

  public setEnd(e: LocInfo): void {
    this.end = e;
  }

  public setDistance(d: number): void {
    this.distance = d;
  }

  public isComplete(): boolean {
    if (!this.start) { return false; }
    if (!this.end) { return false; }
    return true;
  }

  public isCompleteElevation(): boolean {
    if (!this.start.isCompleteElevation()) { return false; }
    if (!this.end.isCompleteElevation()) { return false; }
    return true;
  }

  public getLoc(lat: number, lng: number): LocInfo {
    if (this.start.eq(lat, lng)) { return this.start; }
    if (this.end.eq(lat, lng)) { return this.end; }
    throw new Error('not find lat:' + lat + ' lng:' + lng + ' ' + this);
  }
  public getDifHeight(): number {
    return this.end.elevation - this.start.elevation;
  }

  public getSteepness(): number {
    return this.getDifHeight() / this.distance;
  }

}
