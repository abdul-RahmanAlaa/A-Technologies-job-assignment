import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  // private langSubject : Subject<boolean> = new;
  @Output() langToggle = new EventEmitter<boolean>();

  lang: boolean = true;

  get _lang() {
    return this.langToggle.asObservable();
  }

  changeLang() {
    this.lang = !this.lang;

    this.langToggle.emit(this.lang);
  }
}
