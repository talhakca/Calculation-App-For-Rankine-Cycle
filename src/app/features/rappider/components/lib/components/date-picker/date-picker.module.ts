import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderDatePickerComponent } from './date-picker.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [
    RappiderDatePickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzDatePickerModule
  ],
  exports: [
    RappiderDatePickerComponent
  ]
})
export class RappiderDatePickerModule { }
