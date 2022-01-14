import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig,CartItemAdditionalContent, CartItem, ImageComponentConfig } from '../../utils';

@Component({
  selector: 'rappider-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class RappiderCartItemComponent {

  @Input() image: ImageComponentConfig;
  @Input() divider: string;
  @Input() item: CartItem;
  @Input() additionalItems: CartItemAdditionalContent[];

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }
}
