import { ButtonType } from '../button/button-type.enum';
import { FeedbackButtonActionBehaviour } from './feedback-button-action-behavior.enum';

export interface FeedbackButton {
  content: string;
  type?: ButtonType;
  actionBehaviour: FeedbackButtonActionBehaviour;
  redirectUrl?: string;
}
