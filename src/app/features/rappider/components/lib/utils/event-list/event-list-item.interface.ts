import { AvatarComponentConfig } from '../avatar';
import { HeadingComponentConfig } from '../heading';

export interface EventListItem {
  avatar: AvatarComponentConfig;
  title: HeadingComponentConfig;
  subtitle: HeadingComponentConfig;
  description: string;
}
