import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormProductoComponent } from '../../shared/organism/producto-form/producto-form';

@Component({
  imports: [CommonModule,FormProductoComponent],
  standalone:true,
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class ProductosPageComponent {}
