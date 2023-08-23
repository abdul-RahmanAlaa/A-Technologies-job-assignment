import { Component } from '@angular/core';

import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent {
  img: string = '../../../assets/images/Image-79.png';

  firstChartDataAr: Array<string> = [
    'الشخص الاول',
    'قراءة رقم 1',
    'قراءة رقم 2',
    'قراءة رقم 3',
    'الموظف الاول',
    '10 مايو - 10 يونيو',
    'قراءات تانيه',
  ];
  firstChartDataEn: Array<string> = [
    'first person',
    'read number 1',
    'read number 1',
    'read number 1',
    'first employee',
    'may 10 - june 10',
    'other reads',
  ];
  firstChartData: Array<string> = [];

  secondChartDataAr: Array<string> = [
    'إحصائيات',
    'جهاز',
    'الخيار الأول',
    'الخيار الثاني',
  ];
  secondChartDataEn: Array<string> = [
    'statistics',
    'device',
    'first choice',
    'second choice',
  ];
  secondChartData: Array<string> = [];

  fakeNumbers: Array<number> = [254, 120, 25, 158, 108, 50, 35, 256, 18];

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
      this.firstChartData = this.firstChartDataAr;
      this.secondChartData = this.secondChartDataAr;
    } else {
      this.firstChartData = this.firstChartDataEn;
      this.secondChartData = this.secondChartDataEn;
    }
  }

  constructor(private langService: LangService) {}
}
