import { TestBed, inject } from '@angular/core/testing';

import { Fire2Service } from './fire2.service';

describe('Fire2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Fire2Service]
    });
  });

  it('should be created', inject([Fire2Service], (service: Fire2Service) => {
    expect(service).toBeTruthy();
  }));
});
