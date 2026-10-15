import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule,ThreeColumnTemplate,CategoriaFormTemplate,SolicitudFormComponent,FormProductoComponent],
  selector: 'app-home',
  standalone: true,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class HomePageComponent {}
