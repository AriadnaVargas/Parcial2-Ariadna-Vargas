import { Component, OnInit } from '@angular/core';
import { PacienteDetail } from '../PacienteDetail'; 
import { PacientesService } from '../pacientes.service';
@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.css']
})
export class PacientesListComponent implements OnInit {

  pacientes: Array<PacienteDetail> = [];
  selectedPaciente!: PacienteDetail;
  selected:boolean = false;
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
    this.getPacientes();
    this.menores= this.pacienteService.darMenores(this.pacientes);
  }

  onSelected(paciente: PacienteDetail): void{
    this.selectedPaciente = paciente;
    this.selected = true;
  }

}
