import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TagType } from '../../utils/tag/tag-type.enum';

@Component({
  selector: 'rappider-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class RappiderTagComponent {

  /* Mode of tag */
  @Input() mode = TagType.Default;
  /* Checked status of Tag, double binding, only works when nzMode="checkable" */
  @Input() checked = false;
  /* Color of the Tag */
  @Input() color: string;
  /* text */
  @Input() text: string;

  /* Checked status change call back, only works when nzMode="checkable" */
  @Output() checkedChange = new EventEmitter();
  /* 	Callback executed when tag is closed, only works when nzMode="closable" */
  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() close = new EventEmitter();


  onCheckChange() {
    this.checkedChange.emit();
  }

  onTagClose() {
    this.close.emit();
  }

}
