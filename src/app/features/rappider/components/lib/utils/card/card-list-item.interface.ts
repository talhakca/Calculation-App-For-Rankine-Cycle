import { AdditionalSubTitle } from './additional-sub-title.interface';
import { CardButton } from './card-button.interface';

export interface CardListItem {
  avatar?: string;
  title?: string;
  subTitle?: string;
  date?: Date;
  additionalSubTitles?: AdditionalSubTitle[];
  data?: any;
  buttons?: CardButton[];
}
