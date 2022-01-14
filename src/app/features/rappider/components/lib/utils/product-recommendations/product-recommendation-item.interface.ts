import { ButtonComponentConfig } from '../button/button-component-config.interface';
import { HeadingComponentConfig } from '../heading/heading-component-config.interface';
import { ImageComponentConfig } from '../image/image-component-config.interface';

export interface ProductRecommendationItem {
  /* image */
  image?: ImageComponentConfig;
  /* description */
  description?: HeadingComponentConfig;
  /* item subtitle */
  subtitle?: string;
  /* additional content */
  additionalContent?: string;
  /* button */
  button?: ButtonComponentConfig;
  /* rating */
  rate?: number;
}
