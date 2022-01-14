import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderAccordionComponent } from './accordion.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';

@NgModule({
  declarations: [
    RappiderAccordionComponent
  ],
  imports: [
    CommonModule,
    NzCollapseModule
  ],
  exports: [
    RappiderAccordionComponent
  ]
})
export class RappiderAccordionModule { }

