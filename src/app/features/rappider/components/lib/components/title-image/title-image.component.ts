import { Component, Input, OnInit } from '@angular/core';
import { TitleImageItem } from '../../utils/title-image/title-image-item.interface';


@Component({
  selector: 'rappider-title-image',
  templateUrl: './title-image.component.html',
  styleUrls: ['./title-image.component.scss']
})
export class RappiderTitleImageComponent {

  /* title image item */
  @Input() items: TitleImageItem[];

}
