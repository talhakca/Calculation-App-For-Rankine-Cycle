import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderJsonArrayComponent } from './json-array.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { RappiderModalModule } from '../modal/modal.module';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { RappiderCodemirrorModule } from '../codemirror/codemirror.module';
import { RappiderListGridModule } from '../list-grid/list-grid.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderRadioGroupModule } from '../radio-group/radio-group.module';


@NgModule({
  declarations: [
    RappiderJsonArrayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzButtonModule,
    RappiderModalModule,
    NzSpinModule,
    RappiderCodemirrorModule,
    RappiderListGridModule,
    TranslateModule,
    ReactiveFormsModule,
    RappiderButtonModule,
    RappiderRadioGroupModule
  ],
  exports: [
    RappiderJsonArrayComponent
  ]
})
export class RappiderJsonArrayModule { }
