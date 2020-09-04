import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface Lang {
  value: string;
  title: string;
  browserKeys: Array<string>;
}
export class LanguageService {

  constructor() { }



}
