import { Component } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  labelsAr: Array<string> = ['تقويم المواعيد', 'مارس 2023 '];
  labelsEn: Array<string> = ['appointment calendar', 'mars 2023 '];
  labels: Array<string> = [];

  dates = [
    {
      day: ['السبت', 'Saturday'],
      number: 24,
      tasks: [true, true, true],
    },
    {
      day: ['الأحد ', 'Sunday'],
      number: 25,
      tasks: [true, true, true],
    },
    {
      day: ['الإثنين ', 'Monday'],
      number: 26,
      tasks: [true, true, true],
    },
    {
      day: ['الثلاثاء ', 'Tuesday'],
      number: 27,
      tasks: [true, true, true],
    },
    {
      day: ['الأربعاء ', 'Wednesday'],
      number: 28,
      tasks: [true, true, true],
    },
    {
      day: ['الخميس ', 'Thursday'],
      number: 29,
      tasks: [true, true, true],
    },
    {
      day: ['الجمعة ', 'Friday'],
      number: 30,
      tasks: [true, true, true],
    },
  ];

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
      this.labels = this.labelsAr;
    } else {
      this.labels = this.labelsEn;
    }
  }
}
