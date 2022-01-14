import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ButtonComponentConfig,
  ImageComponentConfig,
  HeadingComponentConfig,
  Tag,
  CardOneButtonOutput,
  CardOneImagePosition
} from '../../utils';

@Component({
  selector: 'rappider-card-one',
  templateUrl: './card-one.component.html',
  styleUrls: ['./card-one.component.scss']
})
export class RappiderCardOneComponent {

  /* data to emit */
  @Input() data: any;
  @Input() imagePosition: CardOneImagePosition;
  @Input() image: ImageComponentConfig;
  @Input() imageTags: Tag[];
  @Input() imageButtons: ButtonComponentConfig[];
  @Input() rate: number;
  @Input() titles: HeadingComponentConfig[];
  @Input() currency: string;
  @Input() finalPrice: number;
  @Input() price: number;
  @Input() additionalTags: Tag[];
  @Input() additionalButtons: ButtonComponentConfig[];
  @Input() descriptions: string[];

  @Output() cardClick = new EventEmitter();
  @Output() imageButtonClick = new EventEmitter<CardOneButtonOutput>();
  @Output() additionalButtonClick = new EventEmitter<CardOneButtonOutput>();

  onCardClick() {
    this.cardClick.emit({ data: this.data });
  }

  onImageButtonClick(button: ButtonComponentConfig, event) {
    event.stopPropagation();
    this.imageButtonClick.emit({ button: button, data: this.data });
  }

  onAdditionalButtonClick(button: ButtonComponentConfig, event) {
    event.stopPropagation();
    this.additionalButtonClick.emit({ button: button, data: this.data });
  }

  setImagePositionClass() {
    switch (this.imagePosition) {
      case CardOneImagePosition.Top: {
        return 'image-position-top';
      };
      case CardOneImagePosition.Right: {
        return 'image-position-right';
      };
      case CardOneImagePosition.Left: {
        return 'image-position-left';
      };
      case CardOneImagePosition.Bottom: {
        return 'image-position-bottom';
      };
      default:
        break;
    };
  }

}
