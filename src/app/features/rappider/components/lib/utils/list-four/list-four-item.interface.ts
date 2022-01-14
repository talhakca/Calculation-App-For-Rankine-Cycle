import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';

export interface ListFourItem {
  /* avatar */
  avatar: AvatarComponentConfig;
  /* content text */
  content: string;
  /* time text */
  timeContent: string;
  /* comment text */
  commentText: string;
  /* directive for navigating from the time link to the target place */
  timeRedirectUrl: string;
  /* directive for navigating from the thumbs down link to the target place */
  thumbsDownRedirectUrl: string;
  /* directive for navigating from the thumbs up link to the target place */
  thumbsUpRedirectUrl: string;
}
