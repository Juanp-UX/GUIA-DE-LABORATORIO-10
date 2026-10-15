import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectComponent } from '../../atoms/select/select';
import { InputTextComponent } from '../../atoms/input-text/input-text';
import { ButtonComponent } from '../../atoms/button/button';
import { FormFieldComponent } from '../../molecules/form-field/form-field';
import { Producto } from '../../../models/producto';
import { Categoria } from '../../../models/categoria';

@Component({
  selector: 'organismo-producto-form',
  standalone: true,
  imports: [FormsModule, InputTextComponent, SelectComponent, ButtonComponent, FormFieldComponent],
  templateUrl: './producto-form.html',
})
export class FormProductoComponent {
  producto: Producto = { nombre: '', precio: 0, categoria: '' };

  categorias: Categoria[] = [];

  categoriasOptions: { value: string; label: string }[] = [];

  setCategorias(data: Categoria[]): void {
    this.categorias = data;
    this.categoriasOptions = data.map((c) => ({
      value: String(c.id ?? ''),
      label: c.nombre ?? '',
    }));
  }

  onSubmit(form: HTMLFormElement): void {
    if (form.checkValidity()) {
      alert('Producto enviado: ' + JSON.stringify(this.producto));
      form.reset();
      this.producto = { nombre: '', precio: 0, categoria: '' };
    } else {
      form.reportValidity();
    }
  }
}
