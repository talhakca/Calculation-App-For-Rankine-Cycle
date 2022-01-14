import { Component, Input, OnInit } from '@angular/core';
import { HeadingType } from '../../utils/heading/heading-type.enum';

@Component({
  selector: 'rappider-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class RappiderHeadingComponent {

  /* heading type  */
  @Input() type: HeadingType;
  /* content  */
  @Input() content: string;

  HeadingType = HeadingType;

}
