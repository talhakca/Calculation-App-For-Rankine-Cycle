import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponentConfig, ImageComponentConfig } from '../../utils';

@Component({
  selector: 'rappider-delivered-product-detail',
  templateUrl: './delivered-product-detail.component.html',
  styleUrls: ['./delivered-product-detail.component.scss']
})
export class RappiderDeliveredProductDetailComponent {

  /* data to emit */
  @Input() data: any;
  @Input() image: ImageComponentConfig;
  @Input() product: string;
  @Input() detail: string;
  @Input() deliveryTime: string;
  @Input() addresses: string[];
  @Input() deliveryRate: string;
  @Input() rate: number;
  @Input() button: ButtonComponentConfig;
  @Input() help: string;
  @Input() supports: string[];
  @Input() info: string;
  @Input() orderDetails: string[];
  @Input() orderDate: string;

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onButtonClick() {
    this.buttonClick.emit(this.data);
  }

}
