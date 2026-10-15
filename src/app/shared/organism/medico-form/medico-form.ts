import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from '../../atoms/input-text/input-text';
import { SelectComponent } from '../../atoms/select/select';
import { ButtonComponent } from '../../atoms/button/button';
import { FormFieldComponent } from '../../molecules/form-field/form-field';

// Los campos de texto/número/fecha llegan como string desde los átomos.
export interface MedicoForm {
  nombres: string;
  apellidos: string;
  especialidad: string;
  anios: string;
  genero: string;
  fechaNacimiento: string;
}

@Component({
  selector: 'organismo-medico-form',
  standalone: true,
  imports: [FormsModule, InputTextComponent, SelectComponent, ButtonComponent, FormFieldComponent],
  templateUrl: './medico-form.html',
  styleUrl: './medico-form.css',
})
export class MedicoFormComponent {
  medico: MedicoForm = this.nuevoMedico();

  especialidadesOptions: { value: string; label: string }[] = [
    { value: '', label: 'Seleccione una especialidad' },
    { value: 'Especialidad 1', label: 'Especialidad 1' },
    { value: 'Especialidad 2', label: 'Especialidad 2' },
    { value: 'Especialidad 3', label: 'Especialidad 3' },
  ];

  generoOptions: { value: string; label: string }[] = [
    { value: '', label: 'Seleccione el género' },
    { value: 'Masculino', label: 'Masculino' },
    { value: 'Femenino', label: 'Femenino' },
    { value: 'Otro', label: 'Otro' },
  ];

  private nuevoMedico(): MedicoForm {
    return {
      nombres: '',
      apellidos: '',
      especialidad: '',
      anios: '',
      genero: '',
      fechaNacimiento: '',
    };
  }

  onSubmit(form: HTMLFormElement): void {
    if (form.checkValidity()) {
      const medico = { ...this.medico, anios: Number(this.medico.anios) };
      alert('Médico enviado: ' + JSON.stringify(medico));
      form.reset();
      this.medico = this.nuevoMedico();
    } else {
      form.reportValidity();
    }
  }
}
