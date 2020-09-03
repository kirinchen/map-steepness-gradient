import { Component, OnInit } from '@angular/core';
import { UrlParamsService } from '../service/url-params.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public urlParam: UrlParamsService
  ) { }

  ngOnInit(): void {
  }

}
