import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MedicoFormComponent } from '../../shared/organism/medico-form/medico-form';

@Component({
  imports: [CommonModule, MedicoFormComponent],
  standalone: true,
  selector: 'app-medicos',
  styleUrl: './medicos.css',
  templateUrl: './medicos.html',
})
export class MedicosPageComponent {}
