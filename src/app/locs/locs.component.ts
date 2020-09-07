import { Path } from './../model/path';
import { CurPathsService } from './../service/cur-paths.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export enum SelMode {
  gradient = 'gradient', angle = 'angle'
}

@Component({
  selector: 'app-locs',
  templateUrl: './locs.component.html',
  styleUrls: ['./locs.component.css']
})
export class LocsComponent implements OnInit {

  SelMode: SelMode;
  public gradientFilter = 0;
  public angleFilter = 0;
  public selMode = SelMode.angle;

  constructor(
    public curPaths: CurPathsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public listSelModes(): string[] {
    return Object.keys(SelMode);
  }

  public getPaths(): Array<Path> {
    const list = this.curPaths.pathsInfo.paths;
    switch (this.selMode) {
      case SelMode.angle:
        return list.filter(p => p.getAngleDeg() >= this.angleFilter);
      case SelMode.gradient:
        return list.filter(p => p.getGradient() >= (this.gradientFilter / 100));
    }
    throw new Error('not support ' + this.selMode);

  }

  public selectByQuery(): void {
    const ps = this.getPaths();
    ps.forEach(p => p.selected = true);
  }

  public unSelectAll(): void {
    this.curPaths.pathsInfo.paths.forEach(p => p.selected = false);
  }

  public drawinMap(): void {
    this.router.navigate(['/map', { act: 'drawSel' }]);
  }

}
