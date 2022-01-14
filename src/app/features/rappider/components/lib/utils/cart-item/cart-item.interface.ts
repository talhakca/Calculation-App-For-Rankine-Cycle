import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { CollapseIconPosition } from '../collapse/collapse-icon-position.enum';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { Panel } from '../panel/panel.interface';

export interface CartItem {
  title: HeadingComponentConfig;
  paragraphContent: string;
  additionalContent: HeadingComponentConfig;
  button: ButtonComponentConfig;
  collapse: Panel;
  collapseIconPosition: CollapseIconPosition;
  bordered: boolean;
}
