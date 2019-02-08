import { TestBed } from '@angular/core/testing';

import { NgqDatepickerService } from './ngq-datepicker.service';

describe('NgqDatepickerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgqDatepickerService = TestBed.get(NgqDatepickerService);
    expect(service).toBeTruthy();
  });
});
