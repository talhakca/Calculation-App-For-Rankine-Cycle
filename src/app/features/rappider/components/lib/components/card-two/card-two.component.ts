import { Component, Input } from '@angular/core';
import { AvatarComponentConfig } from '../../utils/avatar';
import { ImageComponentConfig } from '../../utils/image';
import { Tag } from '../../utils/tag';

@Component({
  selector: 'rappider-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class RappiderCardTwoComponent {

  /* tag on the top left of the card */
  @Input() tag: Tag;
  /* background image */
  @Input() backgroundImage: ImageComponentConfig;
  /* title */
  @Input() title: string;
  /* title's router link */
  @Input() titleLink: string;
  /* content */
  @Input() content: string;
  /* user's name */
  @Input() sourceName: string;
  /* user's router link */
  @Input() sourceLink: string;
  /* user's avatar */
  @Input() sourceAvatar: AvatarComponentConfig;

}
