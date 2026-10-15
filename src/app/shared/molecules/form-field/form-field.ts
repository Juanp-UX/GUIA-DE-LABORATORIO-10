import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component ({
  selector: 'molecule-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.html',
  styleUrls: ['./form-field.css']
})

  export class FormFieldComponent {
    @Input() title ='';
}
