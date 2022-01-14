import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig } from '../../utils/heading';

@Component({
  selector: 'rappider-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class RappiderCallToActionComponent {

  /* data to emit */
  @Input() data: any;
  /* title */
  @Input() title: HeadingComponentConfig;
  /* content */
  @Input() content: string;
  /* section class */
  @Input() sectionClass: string;
  /* action button */
  @Input() button: ButtonComponentConfig;

  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit(this.data);
  }
}
