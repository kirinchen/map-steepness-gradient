import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlowDesignComponent } from './flow-design/flow-design.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PropertiesComponent } from './flow-design/properties/properties.component';

import { DesignComponent } from './header/design/design.component';
import { ModelRepoMenuComponent } from './header/model-repo-menu/model-repo-menu.component';
import { KmlLoaderComponent } from './kml-loader/kml-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlowDesignComponent,
    SidebarComponent,
    PropertiesComponent,
    KmlLoaderComponent,
    DesignComponent,
    ModelRepoMenuComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
