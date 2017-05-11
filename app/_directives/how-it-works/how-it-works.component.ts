import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'how-it-works',
  styleUrls: ['how-it-works.component.css'],
  templateUrl: 'how-it-works.component.html'
})
export class HowItWorksComponent {
  isContentVisible: boolean = true;

  constructor() {}

  toggle(): void {
    this.isContentVisible = !this.isContentVisible;
  }
}
