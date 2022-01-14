import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconTextItem } from '../../utils/icon-text';
import { IconTextActionBehavior } from '../../utils/icon-text/icon-text-action-behavior';

@Component({
  selector: 'rappider-icon-text',
  templateUrl: './icon-text.component.html',
  styleUrls: ['./icon-text.component.scss']
})
export class RappiderIconTextComponent {

  @Input() items: IconTextItem[];
  @Input() routeBehavior = IconTextActionBehavior.Emit;

  @Output() itemClick = new EventEmitter();

  IconTextActionBehavior = IconTextActionBehavior;

  onItemClick(item: unknown) {
    this.itemClick.emit(item);
  }
}
