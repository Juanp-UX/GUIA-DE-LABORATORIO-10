import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SolicitudFormComponent } from '../../shared/organism/solicitud-form/solicitud-form';

@Component({
  imports: [CommonModule,SolicitudFormComponent],
  standalone: true,
  selector: 'app-solicitudes',
  styleUrl: './solicitudes.css',
  templateUrl: './solicitudes.html',
})
export class SolicitudesPageComponent {}
