import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UrlParamsService } from '../service/url-params.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {




  constructor(
    public urlParams: UrlParamsService
  ) {

  }

  ngOnInit(): void {
  }

}
