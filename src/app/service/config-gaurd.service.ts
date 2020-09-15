import { CurPathsService } from './cur-paths.service';
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
    private config: ConfigService,
    private curPaths: CurPathsService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (state.url === '/') {
      this.router.navigate(['load']);
      return false;
    }



    if (!this.config.existGmapkey()) {
      this.showAlert('notHastConfig');
      this.router.navigate(['config']);
      return false;
    }

    if ((state.url.startsWith('locs') || state.url.startsWith('map')) && !this.curPaths.existData()) {
      this.showAlert('noKmlData');
      this.router.navigate(['load']);
      return false;
    }

    if (state.url.startsWith('/config')) {
      return true;
    }


    return true;

  }

  private async showAlert(i18nKey: string): Promise<void> {
    const er = await this.language.get('error').toPromise();
    const nocc = await this.language.get(i18nKey).toPromise();
    this.toast.twinkle({
      title: er,
      msg: nocc,
    });

  }

}
