import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';

export interface MessageOneItem {
  avatar?: AvatarComponentConfig;
  time?: string;
  message?: string;
  name?: string;
}
