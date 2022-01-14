import { AvatarComponentConfig } from '../avatar/avatar-component-config.interface';
import { IconBlockMode } from '../icon-block/icon-block-mode.enum';

export interface IconBlockComponentConfig {
  avatar: AvatarComponentConfig;
  title: string;
  content: string;
  mode: IconBlockMode;
}
