import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { RappiderDividerComponent } from './divider.component';

@NgModule({
  declarations: [
    RappiderDividerComponent
  ],
  imports: [
    CommonModule,
    NzDividerModule
  ],
  exports: [
    RappiderDividerComponent
  ]
})
export class RappiderDividerModule { }
