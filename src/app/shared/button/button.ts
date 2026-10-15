import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  standalone: true;
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class ButtonComponent {
  @Input() label= 'Enviar';
  @Input() type: 'button' | 'submit' = 'submit';
  @Input() color = 'primary';
}
