import { TestBed } from '@angular/core/testing';

import { AlbumserviceService } from './albumservice.service';

describe('AlbumserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlbumserviceService = TestBed.get(AlbumserviceService);
    expect(service).toBeTruthy();
  });
});
