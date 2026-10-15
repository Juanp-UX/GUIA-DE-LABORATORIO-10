import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from '../../atoms/input-text/input-text';
import { SelectComponent } from '../../atoms/select/select';
import { ButtonComponent } from '../../atoms/button/button';
import { FormFieldComponent } from '../../molecules/form-field/form-field';
import { Producto } from '../../../models/producto';


export interface Solicitud {
  producto: string;
  cantidad: number;
  fecha: string;
}

@Component({
  selector: 'organismo-solicitud-form',
  standalone: true,
  imports: [FormsModule, InputTextComponent, SelectComponent, ButtonComponent, FormFieldComponent],
  templateUrl: './solicitud-form.html',
})
export class SolicitudFormComponent implements OnInit {
  solicitud: Solicitud = { producto: '', cantidad: 0, fecha: '' };

  productos: Producto[] = [];

  productosOptions: { value: string; label: string }[] = [];

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = [
      { id: 1, nombre: 'producto 1', categoria: 'Categoría 1', precio: 100 },
      { id: 2, nombre: 'producto 2', categoria: 'Categoría 222', precio: 200 },
      { id: 3, nombre: 'producto 3', categoria: 'Categoría 3', precio: 400 },
    ];

    this.productosOptions = [
      { value: '', label: 'Seleccione un producto' },
      ...this.productos.map((p) => ({
        value: String(p.id ?? ''),
        label: p.nombre ?? '',
      })),
    ];
  }

  onSubmit(form: HTMLFormElement): void {
    if (form.checkValidity()) {
      alert('Solicitud enviada: ' + JSON.stringify(this.solicitud));
      form.reset();
      this.solicitud = { producto: '', cantidad: 0, fecha: '' };
    } else {
      form.reportValidity();
    }
  }
}
