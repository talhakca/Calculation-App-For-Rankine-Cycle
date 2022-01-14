import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'rappider-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class RappiderModalComponent {
  /* title */
  @Input() nzTitle: string;
  /* visibility status */
  @Input() nzVisible = false;
  /* ok text */
  @Input() nzOkText: string;
  /* cancel text */
  @Input() nzCancelText: string;
  /* modal size */
  @Input() nzWidth: string;
  /* ok button disabled */
  @Input() nzOkDisabled: boolean;
  /* cancel button disabled */
  @Input() nzCancelDisabled: boolean;
  /* footer */
  @Input() nzFooter: unknown;
  /* ok button loading state */
  @Input() nzOkLoading: boolean;
  /* is ok button danger */
  @Input() nzOkDanger: boolean;

  /* ok click */
  @Output() nzOnOk = new EventEmitter();
  /* cancel click */
  @Output() nzOnCancel = new EventEmitter();
  @Output() nzVisibleChange = new EventEmitter<boolean>();

  onOkClick() {
    this.nzOnOk.emit();
  }

  onCancelClick() {
    this.nzOnCancel.emit();
    this.nzVisibleChange.emit(false);
  }

}
