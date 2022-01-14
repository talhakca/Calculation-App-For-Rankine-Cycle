import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { RappiderTagComponent } from './tag.component';


@NgModule({
  declarations: [
    RappiderTagComponent
  ],
  imports: [
    CommonModule,
    NzTagModule
  ],
  exports: [
    RappiderTagComponent
  ]
})
export class RappiderTagModule { }
