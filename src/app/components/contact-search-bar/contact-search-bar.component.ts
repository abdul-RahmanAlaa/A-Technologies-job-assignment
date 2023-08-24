import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-contact-search-bar',
  templateUrl: './contact-search-bar.component.html',
  styleUrls: ['./contact-search-bar.component.scss'],
})
export class ContactSearchBarComponent implements OnInit {
  constructor(private langService: LangService) {}

  get lang(): boolean {
    return this.langService.lang;
  }

  buttonAr: string = ' + إضافة جديد';
  buttonEn: string = '+ add new';
  button: string = '';

  ngOnInit() {
    this.changeLang(this.lang);
    this.langService._lang.subscribe((lang) => {
      this.changeLang(lang);
    });
  }

  changeLang(lang: boolean): void {
    if (lang === true) {
      this.button = this.buttonAr;
    } else {
      this.button = this.buttonEn;
    }
  }
}
