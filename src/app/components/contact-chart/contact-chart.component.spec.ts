import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChartComponent } from './contact-chart.component';

describe('ContactChartComponent', () => {
  let component: ContactChartComponent;
  let fixture: ComponentFixture<ContactChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactChartComponent]
    });
    fixture = TestBed.createComponent(ContactChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
