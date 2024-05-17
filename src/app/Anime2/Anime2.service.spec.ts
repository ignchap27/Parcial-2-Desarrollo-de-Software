/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Anime2Service } from './Anime2.service';

describe('Service: Anime2', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Anime2Service]
    });
  });

  it('should ...', inject([Anime2Service], (service: Anime2Service) => {
    expect(service).toBeTruthy();
  }));
});
