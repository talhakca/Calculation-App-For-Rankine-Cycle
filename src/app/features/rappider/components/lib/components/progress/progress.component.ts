import { Component, OnInit, Input } from '@angular/core';
import { ProgressSize } from '../../utils/progress/progress-size.enum';
import { ProgressStatus } from '../../utils/progress/progress-status.enum';
import { ProgressType } from '../../utils/progress/progress-type.enum';

@Component({
  selector: 'rappider-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class RappiderProgressComponent {

  // to set the completion percentage
  @Input() percent: number;
  // whether to display the progress value and the status icon
  @Input() showInfo: boolean;
  // 	to set the status of the Progress
  @Input() status: ProgressStatus;
  // to set the type
  @Input() type: ProgressType;
  // segmented success percent
  @Input() successPercent: number;
  // size of progress
  @Input() size: ProgressSize;

}
