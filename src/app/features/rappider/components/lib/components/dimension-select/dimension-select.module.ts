import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderDimensionSelectComponent } from './dimension-select.component';
import { RappiderNumberInputModule } from '../number-input/number-input.module';
import { RappiderSelectModule } from '../select/select.module';


@NgModule({
  declarations: [
    RappiderDimensionSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RappiderNumberInputModule,
    RappiderSelectModule
  ],
  exports: [
    RappiderDimensionSelectComponent
  ]
})
export class RappiderDimensionSelectModule { }
