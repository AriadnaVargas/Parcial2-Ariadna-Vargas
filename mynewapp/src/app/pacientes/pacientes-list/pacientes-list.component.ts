import { Component, OnInit } from '@angular/core';
import { Paciente } from '../Paciente'; 
import { PacientesService } from '../pacientes.service';
@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  pacientes: Array<Paciente> = [];
  menores: number=0;
  constructor(private pacienteService: PacientesService) { }

  getPacientes(): void{
    this.pacienteService.getPacientes().subscribe(
      (pacientes) => {
        this.pacientes = pacientes;
      }
    );
  }
  ngOnInit() {
    this.menores= this.pacienteService.darMenores(this.pacientes);
  }

}
