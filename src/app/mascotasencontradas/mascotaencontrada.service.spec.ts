import { TestBed } from '@angular/core/testing';

import { MascotaencontradaService } from './mascotaencontrada.service';

describe('MascotaencontradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MascotaencontradaService = TestBed.get(MascotaencontradaService);
    expect(service).toBeTruthy();
  });
});
