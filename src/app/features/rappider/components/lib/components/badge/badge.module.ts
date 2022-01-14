import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { RappiderBadgeComponent } from './badge.component';


@NgModule({
  declarations: [
    RappiderBadgeComponent
  ],
  imports: [
    CommonModule,
    NzBadgeModule
  ],
  exports: [
    RappiderBadgeComponent
  ]
})
export class RappiderBadgeModule { }
