import { ProgressSize } from './progress-size.enum';
import { ProgressStatus } from './progress-status.enum';
import { ProgressType } from './progress-type.enum';

export interface ProgressComponentConfig {
  percent: number;
  status: ProgressStatus;
  type: ProgressType;
  showInfo?: boolean;
  size?: ProgressSize;
}
