import { Component, Input } from '@angular/core';

@Component({
  selector: 'rappider-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class RappiderLabelComponent {
  @Input() content: string;

}
