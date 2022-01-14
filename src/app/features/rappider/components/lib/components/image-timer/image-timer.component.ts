import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CountdownComponentConfig, HeadingComponentConfig, ImageComponentConfig } from '../../utils';


@Component({
  selector: 'rappider-image-timer',
  templateUrl: './image-timer.component.html',
  styleUrls: ['./image-timer.component.scss']
})
export class RappiderImageTimerComponent {

/**
 *Displays the title of the image/countdown
 *
 * @type {HeadingComponentConfig}
 * @memberof RappiderImageTimerComponent
 */
@Input() imageTitle: HeadingComponentConfig;
/**
 *Displays the additional information for the countdown
 *
 * @type {string}
 * @memberof RappiderImageTimerComponent
 */
@Input() additionalContent: string;
/**
 *Displays the image for the countdown
 *
 * @type {ImageComponentConfig}
 * @memberof RappiderImageTimerComponent
 */
@Input() image: ImageComponentConfig;
/**
 *Displays the countdown
 *
 * @type {CountdownComponentConfig}
 * @memberof RappiderImageTimerComponent
 */
@Input() countdown: CountdownComponentConfig;
/**
 *Emits when countdown finishes
 *
 * @memberof RappiderImageTimerComponent
 */
// eslint-disable-next-line @angular-eslint/no-output-native
@Output() click = new EventEmitter<CountdownComponentConfig>();


  onCountdownFinish(countdown: CountdownComponentConfig) {
    this.click.emit(countdown);
  }

}
