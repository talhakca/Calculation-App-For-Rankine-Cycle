import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar/avatar-component-config.interface';
import { ButtonComponentConfig } from '../../utils/button';
import { HeadingComponentConfig } from '../../utils/heading';
import { ImageComponentConfig } from '../../utils/image';

@Component({
  selector: 'rappider-card-six',
  templateUrl: './card-six.component.html',
  styleUrls: ['./card-six.component.scss']
})
export class RappiderCardSixComponent {

  /* card title */
  @Input() title: HeadingComponentConfig;
  /* card description */
  @Input() description: string;
  /*  author's name */
  @Input() authorName: string;
  /* card's image */
  @Input() image: ImageComponentConfig;
  /* avatar interface */
  @Input() avatar: AvatarComponentConfig;
  /* button  */
  @Input() button: ButtonComponentConfig;

}
