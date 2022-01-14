import { Component, Input } from '@angular/core';

@Component({
  selector: 'rappider-blockquote',
  templateUrl: './blockquote.component.html',
  styleUrls: ['./blockquote.component.scss']
})
export class RappiderBlockquoteComponent {

  // content of blockquote
  @Input() content: string;
  // footer of blockquote
  @Input() footer: string;

}
