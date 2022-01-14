import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderStringArrayComponent } from './string-array.component';
import { FormsModule } from '@angular/forms';
import { RappiderRowFormModule } from '../row-form/row-form.module';


@NgModule({
  declarations: [
    RappiderStringArrayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RappiderRowFormModule
  ],
  exports: [
    RappiderStringArrayComponent
  ]
})
export class RappiderStringArrayModule { }
