import { Component } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private langService: LangService) {}

  get lang(): boolean {
    return this.langService.lang;
  }

  changeLang() {
    this.langService.changeLang();
  }
}
