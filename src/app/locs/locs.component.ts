import { CurPathsService } from './../service/cur-paths.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locs',
  templateUrl: './locs.component.html',
  styleUrls: ['./locs.component.css']
})
export class LocsComponent implements OnInit {

  constructor(
    public curPaths: CurPathsService
  ) { }

  ngOnInit(): void {
  }

}
