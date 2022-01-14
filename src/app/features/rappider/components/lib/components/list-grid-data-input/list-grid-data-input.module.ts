import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderListGridDataInputComponent } from './list-grid-data-input.component';

import { NzSpinModule } from 'ng-zorro-antd/spin';
import { RappiderModalModule } from '../modal/modal.module';

import { RappiderButtonModule } from '../button/button.module';
import { RappiderRadioModule } from '../radio/radio.module';
import { RappiderCodemirrorModule } from '../codemirror/codemirror.module';
import { RappiderInputLabelModule } from '../input-label/input-label.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';


@NgModule({
  declarations: [
    RappiderListGridDataInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RappiderButtonModule,
    RappiderRadioModule,
    RappiderCodemirrorModule,
    RappiderInputLabelModule,
    RappiderTextboxModule,
    RappiderModalModule,
    NzSpinModule,
    TranslateModule
  ],
  exports: [
    RappiderListGridDataInputComponent
  ]
})
export class RappiderListGridDataInputModule { }
