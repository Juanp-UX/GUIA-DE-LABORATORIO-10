import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from '../../atoms/input-text/input-text';
import { ButtonComponent } from '../../atoms/button/button';
import { FormFieldComponent } from '../../molecules/form-field/form-field';

export interface Categoria {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'organismo-categoria-form',
  standalone: true,
  imports: [FormsModule, InputTextComponent, ButtonComponent, FormFieldComponent],
  templateUrl: './categoria-form.html',
})
export class CategoriaFormComponent {
  categoria: Categoria = { nombre: '', descripcion: '' };

  onSubmit(form: HTMLFormElement) {
    if (form.checkValidity()) {
      alert('Categoria enviada: ' + JSON.stringify(this.categoria));
      form.reset();
      this.categoria = { nombre: '', descripcion: '' };
    } else {
      form.reportValidity();
    }
  }
}
