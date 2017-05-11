import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'custom-button',
  styleUrls: ['custom-button.component.css'],
  templateUrl: 'custom-button.component.html'
})
export class CustomButtonComponent {
  @Input() type: String;

  constructor() {}
}
