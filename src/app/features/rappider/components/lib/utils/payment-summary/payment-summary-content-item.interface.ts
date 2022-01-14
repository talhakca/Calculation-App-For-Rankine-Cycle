import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { IconComponentConfig } from '../icon/icon-component-config.interface';

export interface PaymentSummaryContentItem {
  icon?: IconComponentConfig;
  text?: string;
  predefinedText?: string;
  button?: ButtonComponentConfig;
}
