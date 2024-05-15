import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesListComponent } from './pacientes-list/pacientes-list.component';
import { PacientesDetailComponent } from './pacientes-detail/pacientes-detail.component';
@NgModule({
  imports: [
    CommonModule
  ],
  exports:[PacientesListComponent],
  declarations: [PacientesListComponent, PacientesDetailComponent]
})
export class PacientesModule { }
