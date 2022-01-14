import { Component, Input } from '@angular/core';

@Component({
  selector: 'rappider-input-label',
  templateUrl: './input-label.component.html',
  styleUrls: ['./input-label.component.scss']
})
export class RappiderInputLabelComponent {

  @Input() title: string;
  @Input() icon: string;

}
