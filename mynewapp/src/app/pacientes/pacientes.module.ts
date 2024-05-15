import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PacientesListComponent],
  declarations: [PacientesListComponent]
})
export class PacientesModule { }
