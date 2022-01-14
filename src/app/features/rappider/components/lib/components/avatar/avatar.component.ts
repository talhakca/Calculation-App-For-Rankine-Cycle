import { Component, Input } from '@angular/core';
import { AvatarShape } from '../../utils/avatar/avatar-shape.enum';
import { AvatarSize } from '../../utils/avatar/avatar-size.enum';

@Component({
  selector: 'rappider-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class RappiderAvatarComponent {
  /* avatar text */
  @Input() text: string;
  /* displayed icon's name */
  @Input() iconName: string;
  /* avatar shape */
  @Input() shape: AvatarShape;
  /* avatar image url */
  @Input() imageUrl: string;
  /* alternate text */
  @Input() altText: string;
  /* css style eg. backgroundColor */
  @Input() cssStyle: string;
  /* avatar size */
  @Input() size: AvatarSize | number;

}
