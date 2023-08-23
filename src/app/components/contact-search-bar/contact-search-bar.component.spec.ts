import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSearchBarComponent } from './contact-search-bar.component';

describe('ContactSearchBarComponent', () => {
  let component: ContactSearchBarComponent;
  let fixture: ComponentFixture<ContactSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSearchBarComponent]
    });
    fixture = TestBed.createComponent(ContactSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
