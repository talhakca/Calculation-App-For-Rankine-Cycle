import { DividerOrientation } from './divider-orientation.enum';
import { DividerType } from './divider-type.enum';

export interface DividerComponentConfig {
  dashed?: boolean;
  type?: DividerType;
  text?: string;
  textPlacement?: DividerOrientation;
}
