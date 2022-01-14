import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  PaymentSummaryAddinationalContent,
  PaymentSummaryContent,
  HeadingComponentConfig,
  ButtonComponentConfig
} from '../../utils';

@Component({
  selector: 'rappider-payment-summary',
  templateUrl: './payment-summary.component.html',
  styleUrls: ['./payment-summary.component.scss']
})
export class RappiderPaymentSummaryComponent {

  @Input() title: HeadingComponentConfig;
  @Input() contents: PaymentSummaryContent[];
  @Input() addinationalContents: PaymentSummaryAddinationalContent[];
  @Input() footerContents: PaymentSummaryAddinationalContent[];

  @Output() buttonClick = new EventEmitter<ButtonComponentConfig>();

  onClickButton(button: ButtonComponentConfig) {
    this.buttonClick.emit(button);
  }

}
