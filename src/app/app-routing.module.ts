import { MapComponent } from './map/map.component';
import { ConfigGaurdService } from './service/config-gaurd.service';
import { ConfigComponent } from './config/config.component';
import { LocsComponent } from './locs/locs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './header/design/design.component';
import { ModelRepoMenuComponent } from './header/model-repo-menu/model-repo-menu.component';
import { KmlLoadComponent } from './kml-load/kml-load.component';

// https://www.techiediaries.com/angular-router-multiple-outlets/ NOT WORK
const routes: Routes = [
  { path: '', component: KmlLoadComponent, canActivate: [ConfigGaurdService] },
  { path: 'load', component: KmlLoadComponent, canActivate: [ConfigGaurdService] },
  { path: 'locs', component: LocsComponent, canActivate: [ConfigGaurdService] },
  { path: 'map', component: MapComponent, canActivate: [ConfigGaurdService] },
  { path: 'config', component: ConfigComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
