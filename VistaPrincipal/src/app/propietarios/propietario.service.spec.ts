import { TestBed } from '@angular/core/testing';

import { PropietarioService } from './propietario.service';

describe('PropietarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PropietarioService = TestBed.get(PropietarioService);
    expect(service).toBeTruthy();
  });
});
