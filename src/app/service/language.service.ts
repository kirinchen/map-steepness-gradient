import { StringUtils } from './../utils/string-utils';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public static SAVE_KEY = 'lang';

  public langs: Array<Lang> = [
    { value: 'en', title: 'English', browserKeys: ['en', 'eu-au'] },
    { value: 'zh-tw', title: '繁體中文', browserKeys: ['zh-tw', 'zh', 'zh_hk', 'zh-cn'] }
  ];
  constructor(
    private translate: TranslateService
  ) { }

  public saveLang(l: Lang): void {
    localStorage.setItem(LanguageService.SAVE_KEY, l.value);
  }

  public applyLang(): void {
    const c = this.getSaveLang();
    this.translate.use(c.value);
  }

  public findByVal(v: string): Lang {
    return this.langs.find(l => l.value === v);
  }

  private findByBroser(b: string): Lang {
    return this.langs.find(l => l.browserKeys.includes(b));
  }

  public getSaveLang(): Lang {
    console.log(this.translate.getBrowserLang() + ' ' + navigator.language);
    const sl = localStorage.getItem(LanguageService.SAVE_KEY);
    if (StringUtils.isBlank(sl)) {
      const bl = this.findByBroser(this.getBroserLan());
      if (bl) { return bl; }
      return this.findByVal('en');
    }
    const l = this.findByVal(sl);
    if (l) { return l; }
    return this.findByVal('en');
  }

  private getBroserLan(): string {
    console.log(this.translate.getBrowserLang() + ' ' + navigator.language);
    return navigator.language.toLowerCase();
  }



}


export interface Lang {
  value: string;
  title: string;
  browserKeys: Array<string>;
}
