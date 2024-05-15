import { Paciente } from './Paciente';

export class PacienteDetail  extends Paciente{

    constructor(nombre: string, edad: number, diagnostico: string)
    {
        super(nombre, edad, diagnostico);
    }
}
