import { AvatarShape } from './avatar-shape.enum';
import { AvatarSize } from './avatar-size.enum';
export interface AvatarComponentConfig {
  iconName?: string;
  text?: string;
  shape?: AvatarShape;
  imageUrl?: string;
  altText?: string;
  cssStyle?: string;
  size?: AvatarSize;
}
