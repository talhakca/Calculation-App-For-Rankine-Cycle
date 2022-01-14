import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderModalModule } from '../modal/modal.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';

import { RappiderEditFormConfigInputComponent } from './edit-form-config-input.component';

import { RappiderButtonModule } from '../button/button.module';
import { RappiderInputLabelModule } from '../input-label/input-label.module';
import { RappiderJsonArrayModule } from '../json-array/json-array.module';
import { RappiderSelectModule } from '../select/select.module';
import { RappiderCodemirrorModule } from '../codemirror/codemirror.module';
import { RappiderTextboxModule } from '../textbox/textbox.module';
import { RappiderCheckboxModule } from '../checkbox/checkbox.module';


@NgModule({
  declarations: [
    RappiderEditFormConfigInputComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    RappiderButtonModule,
    RappiderModalModule,
    RappiderInputLabelModule,
    RappiderJsonArrayModule,
    RappiderSelectModule,
    RappiderCodemirrorModule,
    RappiderTextboxModule,
    RappiderCheckboxModule,
    NzButtonModule,
    NzPopoverModule,
  ],
  exports: [
    RappiderEditFormConfigInputComponent
  ]
})
export class RappiderEditFormConfigInputModule { }
