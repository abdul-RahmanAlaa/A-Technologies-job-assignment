import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ICard } from 'src/app/models/icard';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  cards: ICard[] = [];

  timingAr: Array<string> = ['ص', 'م'];
  timingEn: Array<string> = ['am', 'pm'];
  timing: Array<string> = [];

  constructor(private langService: LangService) {
    this.cards = [
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: '',
        img: '../../../assets/images/Image-35.png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '04:00',
        endTime: '05:00',
        isPm: true,
        name: 'ميرا محسن',
        img: '../../../assets/images/Image-35(1).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '03:00',
        endTime: '04:00',
        isPm: true,
        name: 'محمود الغريب',
        img: '../../../assets/images/Image-35(2).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: 'كريم عبد العزيز',
        img: '../../../assets/images/Image-35(3).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: '',
        img: '../../../assets/images/Image-35.png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '04:00',
        endTime: '05:00',
        isPm: true,
        name: 'ميرا محسن',
        img: '../../../assets/images/Image-35(1).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '03:00',
        endTime: '04:00',
        isPm: true,
        name: 'محمود الغريب',
        img: '../../../assets/images/Image-35(2).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: 'كريم عبد العزيز',
        img: '../../../assets/images/Image-35(3).png',
      },
    ];
  }

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
      this.timing = this.timingAr;
    } else {
      this.timing = this.timingEn;
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }
}
