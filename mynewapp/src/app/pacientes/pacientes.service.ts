import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from './Paciente';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

 private apiUrl: string = environment.baseUrl + 'pacientes';
constructor(private http: HttpClient) { }

getPacientes(): Observable<Paciente[]>{
  return this.http.get<Paciente[]>(this.apiUrl);
}

darMenores(pacientes: Paciente[]): number{
  let menores: number=0;
  for (let index = 0; index < pacientes.length; index++) {
    if (pacientes[index].edad < 18) {
      menores++;
    }
  }
  return menores;

}
}
