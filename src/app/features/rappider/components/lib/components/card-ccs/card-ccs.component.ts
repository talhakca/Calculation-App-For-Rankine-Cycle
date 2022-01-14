import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { HeadingComponentConfig, ImageComponentConfig, ButtonComponentConfig } from '../../utils';

/* TODO: Add this component to the Rappider components */
@Component({
  selector: 'rappider-card-ccs',
  templateUrl: './card-ccs.component.html',
  styleUrls: ['./card-ccs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RappiderCardCcsComponent {

  /* data that will be passed and emitted by the item click */
  @Input() data: any;
  /* title */
  @Input() title: HeadingComponentConfig;
  /* subtitles as array */
  @Input() subtitles: HeadingComponentConfig[];
  /* description */
  @Input() description: string;
  /* image as cover picture, not the backgound cover but above the title */
  @Input() image: ImageComponentConfig;
  /* first action button */
  @Input() firstActionButton: ButtonComponentConfig;
  /* second action button */
  @Input() secondActionButton: ButtonComponentConfig;
  /* third action button */
  @Input() thirdActionButton: ButtonComponentConfig;

  /* card item select/click */
  @Output() itemSelect = new EventEmitter<any>();
  /* action button click  */
  @Output() actionClick = new EventEmitter();

  actionClicked(event: Event, button: ButtonComponentConfig) {
    event.stopPropagation();
    this.actionClick.emit({ button: button, data: this.data });
  }

  itemClicked(data: any) {
    this.itemSelect.emit(data);
  }

}
