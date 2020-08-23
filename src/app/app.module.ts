import { HttpInterceptorService } from './service/http-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule, JsonpInterceptor } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DesignComponent } from './header/design/design.component';
import { ModelRepoMenuComponent } from './header/model-repo-menu/model-repo-menu.component';
import { KmlLoadComponent } from './kml-load/kml-load.component';
import { LocsComponent } from './locs/locs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DesignComponent,
    ModelRepoMenuComponent,
    KmlLoadComponent,
    LocsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
