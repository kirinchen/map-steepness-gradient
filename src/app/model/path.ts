import { LocInfo } from './loc-info';
export class Path {
  public start: LocInfo;
  public end: LocInfo;

  public setStart(s: LocInfo): void {
    this.start = s;
  }

  public setEnd(e: LocInfo): void {
    this.end = e;
  }

  public isComplete(): boolean {
    if (!this.start) { return false; }
    if (!this.end) { return false; }
    return true;
  }
}
