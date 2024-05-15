/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PacientesService } from './pacientes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('Service: Pacientes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PacientesService]
    });
  });

  it('should ...', inject([PacientesService], (service: PacientesService) => {
    expect(service).toBeTruthy();
  }));
});
