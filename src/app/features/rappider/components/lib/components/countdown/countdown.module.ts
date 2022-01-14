import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { RappiderCountdownComponent } from './countdown.component';

@NgModule({
  declarations: [
    RappiderCountdownComponent
  ],
  imports: [
    CommonModule,
    NzStatisticModule
  ],
  exports: [
    RappiderCountdownComponent
  ]
})
export class RappiderCountdownModule { }
