import { Injectable } from '@angular/core';
import { LangService } from './lang.service';

@Injectable({
  providedIn: 'root',
})
export class FixedDataService {
  arabicLabels: Array<string>;
  englishLabels: Array<string>;
  labels: Array<string>;

  get lang(): boolean {
    return this.langService.lang;
  }

  constructor(private langService: LangService) {
    this.arabicLabels = [
      'الرئيسية',
      'الحساب',
      'منيو رقم 1',
      'منيو ميني',
      'المساعدة',
      'الإعدادات',
    ];
    this.englishLabels = [
      'main',
      'account',
      'menu 1',
      'mine menu',
      'help',
      'settings',
    ];
    this.labels = [];
  }

  changeLang(lang: boolean): void {
    if (lang === true) {
      this.labels = this.arabicLabels;
    } else {
      this.labels = this.englishLabels;
    }
  }
}
