import { TestBed } from '@angular/core/testing';

import { MascotaEncontradaService } from './mascotaencontrada.service';

describe('MascotaencontradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MascotaEncontradaService = TestBed.get(MascotaEncontradaService);
    expect(service).toBeTruthy();
  });
});
