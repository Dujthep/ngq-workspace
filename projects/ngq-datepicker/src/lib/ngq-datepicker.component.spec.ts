import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgqDatepickerComponent } from './ngq-datepicker.component';

describe('NgqDatepickerComponent', () => {
  let component: NgqDatepickerComponent;
  let fixture: ComponentFixture<NgqDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgqDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgqDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
