import { NzButtonType } from 'ng-zorro-antd/button';
import { ActionBehavior } from './action-behavior.enum';
import { ActionView } from './action-view.enum';
import { HorizontalPosition } from './horizontal-position.enum';

export interface Action {
  name?: string;
  text?: string;
  buttonType?: NzButtonType;
  icon?: string;
  view?: ActionView;
  behavior: ActionBehavior;
  actions?: Action[];
  redirectUrl?: string;
  queryParams?: Record<string, unknown>;
  horizontalPosition?: HorizontalPosition;
  displayAsMenu?: boolean;
  cssClass?: string;
  cssStyle?: { [key: string]: any };
  disabled?: boolean;
}
