import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RappiderCheckboxListComponent } from './checkbox-list.component';
import { RappiderCheckboxModule } from '../checkbox/checkbox.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [
    RappiderCheckboxListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RappiderCheckboxModule,
    RappiderHeadingModule
  ],
  exports: [
    RappiderCheckboxListComponent
  ]
})
export class RappiderCheckboxListModule { }
