import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardOneComponentConfig, CardOneButtonOutput } from '../../utils';
import { CardOneListTwoCardClickOutput, CardOneListTwoButtonClickOutput } from '../../utils/card-one-list-two';

@Component({
  selector: 'rappider-card-one-list-two',
  templateUrl: './card-one-list-two.component.html',
  styleUrls: ['./card-one-list-two.component.scss']
})
export class RappiderCardOneListTwoComponent {

  @Input() items: CardOneComponentConfig[];

  @Output() cardClick = new EventEmitter<CardOneListTwoCardClickOutput>();
  @Output() imageButtonClick = new EventEmitter<CardOneListTwoButtonClickOutput>();
  @Output() additionalButtonClick = new EventEmitter();


  onCardClick(data: any, item: CardOneComponentConfig) {
    this.cardClick.emit({ data, item });
  }

  onImageButtonClick(cardOneButtonOutput: CardOneButtonOutput, item: CardOneComponentConfig) {
    this.imageButtonClick.emit({ cardOneButtonOutput, item });
  }

  onAdditionalButtonClick(cardOneButtonOutput: CardOneButtonOutput, item: CardOneComponentConfig) {
    this.additionalButtonClick.emit({ cardOneButtonOutput, item });
  }
}
