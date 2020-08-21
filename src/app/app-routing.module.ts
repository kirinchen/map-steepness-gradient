import { FlowDesignComponent } from './flow-design/flow-design.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './header/design/design.component';
import { ModelRepoMenuComponent } from './header/model-repo-menu/model-repo-menu.component';
import { KmlLoaderComponent } from './kml-loader/kml-loader.component';

// https://www.techiediaries.com/angular-router-multiple-outlets/ NOT WORK
const routes: Routes = [
  { path: 'model/design', component: FlowDesignComponent },
  { path: '', component: FlowDesignComponent },
  { path: 'model/repo', component: KmlLoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
