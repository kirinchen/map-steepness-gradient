import { LanguageService } from './language.service';
import { ToastService } from './toast.service';
import { ConfigService } from './config.service';
import { StringUtils } from './../utils/string-utils';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigGaurdService implements CanActivate {

  constructor(
    private router: Router,
    private toast: ToastService,
    private language: TranslateService,
    private config: ConfigService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (state.url === '/') {
      this.router.navigate(['load']);
      return false;
    }

    if (this.config.existGmapkey()) {
      return true;
    }


    this.showAlert();

    this.router.navigate(['config']);
    return false;

  }

  private async showAlert(): Promise<void> {
    const er = await this.language.get('error').toPromise();
    const nocc = await this.language.get('notHastConfig').toPromise();
    this.toast.twinkle({
      title: er,
      msg: nocc,
    });

  }

}
