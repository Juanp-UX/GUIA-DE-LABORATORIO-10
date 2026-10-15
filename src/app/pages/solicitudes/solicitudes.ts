import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule,SolicitudesFormComponent],
  standalone: true,
  selector: 'app-solicitudes',
  styleUrl: './solicitudes.css',
  templateUrl: './solicitudes.html',
})
export class SolicitudesPageComponent {}
