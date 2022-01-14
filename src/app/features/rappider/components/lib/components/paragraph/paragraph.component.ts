import { Component, Input } from '@angular/core';

@Component({
  selector: 'rappider-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class RappiderParagraphComponent {

  /* paragraph content */
  @Input() content: string;

}
