import { Component, Input, OnInit } from '@angular/core';
import { PacienteDetail } from '../PacienteDetail';
@Component({
  selector: 'app-pacientes-detail',
  templateUrl: './pacientes-detail.component.html',
  styleUrls: ['./pacientes-detail.component.css']
})
export class PacientesDetailComponent implements OnInit {

  @Input() pacienteDetail!: PacienteDetail;
  constructor() { }

  ngOnInit() {
  }

}
