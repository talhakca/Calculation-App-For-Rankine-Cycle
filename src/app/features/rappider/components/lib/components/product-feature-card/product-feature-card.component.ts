import { Component, Input } from '@angular/core';
import { HeadingComponentConfig, ImageComponentConfig, ProductFeatureItem } from '../../utils';

@Component({
  selector: 'rappider-product-feature-card',
  templateUrl: './product-feature-card.component.html',
  styleUrls: ['./product-feature-card.component.scss']
})
export class RappiderProductFeatureCardComponent {

  /* heading */
  @Input() heading: HeadingComponentConfig;
  /* image */
  @Input() image: ImageComponentConfig;
  /* text */
  @Input() price: string;
  /* additional content-text */
  @Input() additionalContents: string[];
  /* rating of the product */
  @Input() rate: number;
  /* feature and detail input */
  @Input() items: ProductFeatureItem[];

}
