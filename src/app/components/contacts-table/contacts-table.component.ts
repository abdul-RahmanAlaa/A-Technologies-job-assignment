import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { IEmp } from 'src/app/models/iemp';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss'],
})
export class ContactsTableComponent implements OnInit {
  options: boolean = false;

  optionsHeader: Array<string> = ['التحكم في الجدول', 'control the table'];

  employees: IEmp[];

  columnsAr: Array<string> = [
    'رقم ال id',
    'الاسم بالكامل',
    'البريد الإلكتروني',
    'ايام العمل',
    'ملفات',
  ];
  columnsEn: Array<string> = [
    'id number',
    'full name',
    'e-mail',
    'work days',
    'files',
  ];
  columns: Array<string> = [];

  daysAr: Array<string> = ['س', 'ح', 'ن', 'ث', 'ر', 'خ', 'ج'];
  daysEn: Array<string> = ['sa', 'su', 'mo', 'tu', 'we', 'th', 'fr'];
  days: Array<string> = [];

  footerDataAr: Array<string> = ['عرض', 'من اصل'];
  footerDataEn: Array<string> = ['show', 'of'];
  footerData: Array<string> = [];

  totalPages: Array<number> = [];
  pages: Array<number> = [1, 2, 3, 4, 5];

  constructor(private langService: LangService) {
    this.employees = [
      {
        id: 'ID-15877',
        name: 'إسم إفتراضي جديد مثال ',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'كتالوج الشركة.pdf',
          '../../../assets/images/clipboardtext.svg',
          9,
        ],
      },
      {
        id: 'ID-15878',
        name: 'إسم إفتراضي جديد',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'واجهة المستخدم .png',
          '../../../assets/images/afece1f8c10b01a95e7b3d54abab1012.png',
          9,
        ],
      },
      {
        id: 'ID-15879',
        name: 'إسم إفتراضي جديد',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'كتالوج الشركة.pdf',
          '../../../assets/images/clipboardtext.svg',
          9,
        ],
      },
      {
        id: 'ID-15880',
        name: 'إسم إفتراضي جديد',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'واجهة المستخدم .png',
          '../../../assets/images/afece1f8c10b01a95e7b3d54abab1012.png',
          9,
        ],
      },
      {
        id: 'ID-15881',
        name: 'إسم إفتراضي جديد',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'واجهة المستخدم .png',
          '../../../assets/images/afece1f8c10b01a95e7b3d54abab1012.png',
          9,
        ],
      },
      {
        id: 'ID-15882',
        name: 'إسم إفتراضي جديد',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'كتالوج الشركة.pdf',
          '../../../assets/images/clipboardtext.svg',
          9,
        ],
      },
      {
        id: 'ID-15883',
        name: 'إسم إفتراضي جديد',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'واجهة المستخدم .png',
          '../../../assets/images/afece1f8c10b01a95e7b3d54abab1012.png',
          9,
        ],
      },
      {
        id: 'ID-15884',
        name: 'إسم إفتراضي جديد',
        email: 'Example@company.com',
        workDays: [true, true, false, true, true, true, false],
        files: [
          'كتالوج الشركة.pdf',
          '../../../assets/images/clipboardtext.svg',
          9,
        ],
      },
    ];

    for (let i = 1; i < 251; i++) {
      this.totalPages.push(i);
    }
  }

  toggleSettings(): void {
    this.options = !this.options;
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
      this.columns = this.columnsAr;
      this.days = this.daysAr;
      this.footerData = this.footerDataAr;
    } else {
      this.columns = this.columnsEn;
      this.days = this.daysEn;
      this.footerData = this.footerDataEn;
    }
  }

  onClick(event: any) {
    let getValue = event.target.getAttribute('for');
    let goToParent = event.target.parentElement;
    let getInputRadio = goToParent.querySelector(
      'input[id = ' + getValue + ']'
    );
    console.log(getInputRadio.getAttribute('id'));
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.employees, event.previousIndex, event.currentIndex);
  }

  optionStatus(event: any): void {
    console.log(event.target.checked);
    console.log(event.target.id);
  }
}
