import { Component, Input } from '@angular/core';
import { CardElevenItem } from '../../utils/card-eleven/card-eleven-item.interface';

@Component({
  selector: 'rappider-card-eleven',
  templateUrl: './card-eleven.component.html',
  styleUrls: ['./card-eleven.component.scss']
})
export class RappiderCardElevenComponent {

  /**
   * additional content
   *
   * @type {string}
   * @memberof RappiderCardElevenComponent
   */
  @Input() additionalContent: string;

  /**
   * title and description content
   *
   * @type {CardElevenItem[]}
   * @memberof RappiderCardElevenComponent
   */
  @Input() contentItems: CardElevenItem[];

}
