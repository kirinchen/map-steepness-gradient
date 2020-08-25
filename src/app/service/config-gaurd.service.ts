import { ConfigService } from './config.service';
import { StringUtils } from './../utils/string-utils';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigGaurdService implements CanActivate {

  constructor(
    private router: Router,
    private config: ConfigService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.config.existGmapkey) {
      return true;
    }

    this.router.navigate(['config']);
    return false;

  }
}
