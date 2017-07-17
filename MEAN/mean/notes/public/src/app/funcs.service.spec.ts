import { TestBed, inject } from '@angular/core/testing';

import { FuncsService } from './funcs.service';

describe('FuncsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncsService]
    });
  });

  it('should be created', inject([FuncsService], (service: FuncsService) => {
    expect(service).toBeTruthy();
  }));
});
