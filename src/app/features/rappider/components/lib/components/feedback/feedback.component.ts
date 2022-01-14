import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonType } from '../../utils/button/button-type.enum';
import { FeedbackButtonActionBehaviour } from '../../utils/feedback/feedback-button-action-behavior.enum';
import { FeedbackButton } from '../../utils/feedback/feedback-button.interface';


@Component({
  selector: 'rappider-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class RappiderFeedbackComponent implements OnInit {
  /**
   *
   *
   * @type {string}
   * @memberof RappiderFeedbackComponent
   */

  @Input() icon: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() buttons: FeedbackButton[];

  @Output() buttonClick = new EventEmitter<FeedbackButton>();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initDefaults();
  }

  initDefaults() {
    if (this.buttons) {
      for (let i = 0; i < this.buttons.length; i++) {
        if (!this.buttons[i].type) {
          this.buttons[i].type = ButtonType.Primary;
        }
      }
    }
  }

  onButtonClick(button: FeedbackButton) {
    if (button.actionBehaviour === FeedbackButtonActionBehaviour.Emit) {
      this.buttonClick.emit(button);
    } else if (button.actionBehaviour === FeedbackButtonActionBehaviour.Route) {
      this.router.navigateByUrl(button.redirectUrl);
    }
  }

}
