import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import * as marked from 'marked';

@Component({
  encapsulation: ViewEncapsulation.None,
  moduleId: module.id,
  selector: 'markdown',
  styleUrls: ['markdown.component.css'],
  templateUrl: 'markdown.component.html'
})
export class MarkdownComponent implements OnInit {
  @Input() content: string;

  parsedContent: string;

  constructor() {}

  ngOnInit(): void {
    this.parsedContent = marked(this.content);
  }
}
