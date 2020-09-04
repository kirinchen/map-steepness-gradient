import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public static SAVE_KEY = 'lang';

  public langs: Array<Lang> = [
    { value: 'en', title: 'English', browserKeys: ['en', 'eu-au'] },
    { value: 'zh-tw', title: '繁體中文', browserKeys: ['zh-tw', 'zh', 'zh_hk', 'zh-cn'] }
  ];
  constructor() { }

  public saveLang(l: Lang): void {

  }

  private findByVal(v: string): Lang {
    return this.langs.find(l => l.value === v);
  }

  private getSaveLang(): Lang {
    const sl = localStorage.getItem(LanguageService.SAVE_KEY);
 const l =this.findByVal(sl);

  }



}


export interface Lang {
  value: string;
  title: string;
  browserKeys: Array<string>;
}
