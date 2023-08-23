import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  display: boolean[] = [false, true];

  mainAr: Array<string> = ['الرئيسية', 'الحساب'];
  mainEn: Array<string> = ['main', 'account'];
  main: Array<string> = [];

  mainOptionsAr: Array<string> = [
    'الرئيسية',
    'منيو رقم 1',
    'منيو رقم 1',
    'منيو رقم 1',
    'منيو رقم 1',
  ];
  mainOptionsEn: Array<string> = [
    'main',
    'menu 1',
    'menu 1',
    'menu 1',
    'menu 1',
  ];
  mainOptions: Array<string> = [];

  secondaryOptionAr: Array<string> = ['منيو ميني', 'منيو ميني', 'منيو ميني'];
  secondaryOptionEn: Array<string> = ['mine menu', 'mine menu', 'mine menu'];
  secondaryOption: Array<string> = [];

  accountOptionsAr: Array<string> = ['المساعدة', 'الإعدادات'];
  accountOptionsEn: Array<string> = ['help', 'settings'];
  accountOptions: Array<string> = [];

  constructor(private langService: LangService) {}

  get lang(): boolean {
    return this.langService.lang;
  }

  ngOnInit() {
    this.changeLang(this.lang);
    this.langService._lang.subscribe((lang) => {
      this.changeLang(lang);
    });
  }

  changeLang(lang: boolean): void {
    if (lang === true) {
      this.main = this.mainAr;
      this.mainOptions = this.mainOptionsAr;
      this.secondaryOption = this.secondaryOptionAr;
      this.accountOptions = this.accountOptionsAr;
    } else {
      this.main = this.mainEn;
      this.mainOptions = this.mainOptionsEn;
      this.secondaryOption = this.secondaryOptionEn;
      this.accountOptions = this.accountOptionsEn;
    }
  }

  accordionToggle(index: number): void {
    this.display[index] = !this.display[index];
  }
}
