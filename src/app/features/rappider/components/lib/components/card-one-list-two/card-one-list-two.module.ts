import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardOneListTwoComponent } from './card-one-list-two.component';
import { RappiderCardOneModule } from '../card-one/card-one.module';


@NgModule({
  declarations: [
    RappiderCardOneListTwoComponent
  ],
  imports: [
    CommonModule,
    RappiderCardOneModule
  ],
  exports: [
    RappiderCardOneListTwoComponent
  ]
})
export class RappiderCardOneListTwoModule { }
