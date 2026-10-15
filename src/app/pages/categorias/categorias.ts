import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CategoriaFormComponent } from '../../shared/organism/categoria-form/categoria-form';

@Component({
  imports: [CommonModule,CategoriaFormComponent],
  standalone: true,
  selector: 'app-categorias',
  styleUrl: './categorias.css',
  templateUrl: './categorias.html',
})
export class CategoriasPageComponent {}
