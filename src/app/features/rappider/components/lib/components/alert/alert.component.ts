import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { AlertActionConfig } from '../../utils/alert/alert-action-config.interface';
import { AlertTypes } from '../../utils/alert/alert-types';


@Component({
  selector: 'rappider-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class RappiderAlertComponent implements OnInit, OnChanges {

  /* data to emit */
  @Input() data: any;
  @Input() type: AlertTypes;
  @Input() title: string;
  @Input() description: string;
  @Input() showIcon: boolean;
  @Input() closeable: boolean;
  @Input() actionConfig?: AlertActionConfig;

  @Output() actionClick = new EventEmitter();


  ngOnInit() {
    this.initDefaults();
  }

  ngOnChanges() {
    this.initDefaults();
  }

  initDefaults() {
    if (this.showIcon == null) {
      this.showIcon = true;
    }
    if (this.closeable == null) {
      this.closeable = true;
    }
  }

  onActionClick() {
    this.actionClick.emit(this.data);
  }

}
