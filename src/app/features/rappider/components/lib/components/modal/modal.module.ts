import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderModalComponent } from './modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  declarations: [
    RappiderModalComponent
  ],
  imports: [
    CommonModule,
    NzModalModule
  ],
  exports: [
    RappiderModalComponent
  ]
})
export class RappiderModalModule { }
