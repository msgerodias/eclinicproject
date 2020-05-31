import { TestBed } from '@angular/core/testing';

import { EcservicesService } from './ecservices.service';

describe('EcservicesService', () => {
  let service: EcservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
