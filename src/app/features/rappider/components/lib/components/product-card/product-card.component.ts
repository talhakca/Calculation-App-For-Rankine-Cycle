import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponentConfig } from '../../utils/button/button-component-config.interface';
import { HeadingComponentConfig } from '../../utils/heading/heading-component-config.interface';
import { ProductCardOptionsConfig } from '../../utils/product-card/product-card-options-config.interface';
import { SelectComponentConfig } from '../../utils/select/select-component-config.interface';
import { Tag } from '../../utils/tag/tag.interface';
import { TextareaComponentConfig } from '../../utils/textarea/textarea-component-config.interface';

@Component({
  selector: 'rappider-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class RappiderProductCardComponent {
  /* data to emit */
  @Input() data: any;
  /* item tag */
  @Input() tag: Tag;
  /* item title */
  @Input() title: HeadingComponentConfig;
  /* item description */
  @Input() itemDescription: string;
  /* item rating */
  @Input() rate: number;
  /* price label */
  @Input() price: string;
  /* additional options for product */
  @Input() optionItems: ProductCardOptionsConfig[];
  /* label for additional buttons */
  @Input() additionalButtonsLabel: string;
  /* additional content for product */
  @Input() additionalButtons: ButtonComponentConfig[];
  /* text area label */
  @Input() textareaLabel: string;
  /* select component */
  @Input() select: SelectComponentConfig;
  /* textarea component */
  @Input() textarea: TextareaComponentConfig;
  /* main button */
  @Input() button: ButtonComponentConfig;

  @Output() buttonClick = new EventEmitter();

  onButtonClick() {
    this.buttonClick.emit(this.data);
  }
}
