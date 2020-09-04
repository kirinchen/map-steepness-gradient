import { LanguageService } from './service/language.service';
import { Component, OnInit } from '@angular/core';
import { UrlParamsService } from './service/url-params.service';
import { TranslateService } from '@ngx-translate/core';

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
    private language: LanguageService
  ) {
    language.applyLang();
  }

  ngOnInit(): void {
  }

}
