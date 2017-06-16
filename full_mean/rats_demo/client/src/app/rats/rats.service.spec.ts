import { TestBed, inject } from '@angular/core/testing';

import { RatsService } from './rats.service';

describe('RatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RatsService]
    });
  });

  it('should ...', inject([RatsService], (service: RatsService) => {
    expect(service).toBeTruthy();
  }));
});
