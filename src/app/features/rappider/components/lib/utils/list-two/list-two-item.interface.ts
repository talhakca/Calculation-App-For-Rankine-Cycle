import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';

export interface ListTwoItem {
  /* avatar */
  avatar?: AvatarComponentConfig;
  /* content text */
  textContent?: string;
  /* comment time */
  commentTime?: string;
  /* comment text */
  commentText?: string;
}
