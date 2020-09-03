import { HttpInterceptorService } from './service/http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule, JsonpInterceptor, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DesignComponent } from './header/design/design.component';
import { ModelRepoMenuComponent } from './header/model-repo-menu/model-repo-menu.component';
import { KmlLoadComponent } from './kml-load/kml-load.component';
import { LocsComponent } from './locs/locs.component';
import { ConfigComponent } from './config/config.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {MatSelectModule} from '@angular/material/select';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DesignComponent,
    ModelRepoMenuComponent,
    KmlLoadComponent,
    LocsComponent,
    ConfigComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
