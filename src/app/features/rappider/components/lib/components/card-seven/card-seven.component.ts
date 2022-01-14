import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ImageComponentConfig } from '../../utils/image/image-component-config.interface';

@Component({
  selector: 'rappider-card-seven',
  templateUrl: './card-seven.component.html',
  styleUrls: ['./card-seven.component.scss']
})
export class RappiderCardSevenComponent {

  @Input() data: any;
  /* card's image */
  @Input() image: ImageComponentConfig;
  /* author's name */
  @Input() authorName: string;
  /* card description */
  @Input() description: string;
  /* heading */
  @Input() heading: HeadingComponentConfig;
  /* avatar */
  @Input() avatar: AvatarComponentConfig;
  /* rappider-divider type */
  @Input() dividerType: string;
  /* button */
  @Input() button: ButtonComponentConfig;
  /*  date */
  @Input() date = Date();

  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit(this.data);
  }

}
