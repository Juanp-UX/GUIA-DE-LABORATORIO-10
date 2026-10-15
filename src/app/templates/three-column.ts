import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'template-three-column',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './three-column.html',
})
export class ThreeColumnTemplate {
  @Input() titulo = '';
  @Input() tituloIzquierda = '';
  @Input() tituloCentro = '';
  @Input() tituloDerecha = '';
}
