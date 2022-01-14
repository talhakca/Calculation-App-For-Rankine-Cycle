import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { RappiderListGridComponent } from './list-grid.component';

import { RappiderPaginationService } from '../../services/pagination/pagination.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RappiderSwitchModule } from '../switch/switch.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    RappiderListGridComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    DragDropModule,
    RouterModule,
    FormsModule,
    NzButtonModule,
    NzInputModule,
    NzSelectModule,
    NzTableModule,
    NzTagModule,
    NzDropDownModule,
    NzDividerModule,
    RappiderRateDisplayModule,
    NzIconModule
  ],
  providers: [
    RappiderPaginationService
  ],
  exports: [
    RappiderListGridComponent
  ]
})
export class RappiderListGridModule { }
