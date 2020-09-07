import { Path } from './../model/path';
import { CurPathsService } from './../service/cur-paths.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locs',
  templateUrl: './locs.component.html',
  styleUrls: ['./locs.component.css']
})
export class LocsComponent implements OnInit {

  public steepnessFilter = 0;

  constructor(
    public curPaths: CurPathsService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  public getPaths(): Array<Path> {
    const list = this.curPaths.pathsInfo.paths;
    return list.filter(p => p.getAngleDeg() >= this.steepnessFilter);
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
