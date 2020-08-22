import { Component, OnInit } from '@angular/core';
import { UrlParamsService } from './service/url-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flow-editor';
  power = 5;
  factor = 1;

  constructor(
    public urlParams: UrlParamsService,
  ) {

  }
  ngOnInit(): void {
  }

}
