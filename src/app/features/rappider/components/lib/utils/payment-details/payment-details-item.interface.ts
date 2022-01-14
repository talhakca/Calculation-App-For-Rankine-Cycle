import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { ImageComponentConfig } from '../image/image-component-config.interface';

export interface PaymentDetailItem {
  /* item's title */
  title?: HeadingComponentConfig;
  /* item's subtitle */
  subtitle?: HeadingComponentConfig;
  /* additional contents for the item */
  additionalContent?: string;
  /* item's buttons */
  button?: ButtonComponentConfig;
  /* item's image */
  image?: ImageComponentConfig;
}
