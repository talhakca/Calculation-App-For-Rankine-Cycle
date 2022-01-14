import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTreeGridComponent } from './tree-grid.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderDropdownMenuModule } from '../dropdown-menu/dropdown-menu.module';
import { FormatDateModule } from '../../utils/common-utils/pipes/format-date-pipe/format-date.module';


@NgModule({
  declarations: [
    RappiderTreeGridComponent
  ],
  imports: [
    CommonModule,
    FormatDateModule,
    NzSpinModule,
    NzTableModule,
    TranslateModule,
    RappiderIconModule,
    RappiderDropdownMenuModule
  ],
  exports: [
    RappiderTreeGridComponent
  ]
})
export class RappiderTreeGridModule { }
