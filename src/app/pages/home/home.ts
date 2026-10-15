import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThreeColumnTemplate } from '../../templates/three-column';
import { SolicitudFormComponent } from '../../shared/organism/solicitud-form/solicitud-form';
import { MedicoFormComponent } from '../../shared/organism/medico-form/medico-form';
import { CategoriaFormComponent } from '../../shared/organism/categoria-form/categoria-form';

@Component({
  imports: [CommonModule,ThreeColumnTemplate,CategoriaFormComponent,SolicitudFormComponent,MedicoFormComponent],
  selector: 'app-home',
  standalone: true,
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class HomePageComponent {}
