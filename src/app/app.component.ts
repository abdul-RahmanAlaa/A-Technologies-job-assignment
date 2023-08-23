import { Component } from '@angular/core';
import { LangService } from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'A-Technologies-job-assignment';

  constructor(private langService: LangService) {}

  get lang(): boolean {
    return this.langService.lang;
  }
}
