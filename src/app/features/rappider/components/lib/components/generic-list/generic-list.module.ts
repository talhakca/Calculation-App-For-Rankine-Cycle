import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderGenericListComponent } from './generic-list.component';

import { NzListModule } from 'ng-zorro-antd/list';

import { FormatDateModule } from '../../utils';


@NgModule({
  declarations: [
    RappiderGenericListComponent
  ],
  imports: [
    CommonModule,
    NzListModule,
    TranslateModule,
    FormatDateModule
  ],
  exports: [
    RappiderGenericListComponent
  ]
})
export class RappiderGenericListModule { }
