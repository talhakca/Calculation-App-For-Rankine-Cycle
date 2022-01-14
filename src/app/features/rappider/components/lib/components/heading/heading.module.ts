import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHeadingComponent } from './heading.component';
import { RappiderTextModule } from '../text/text.module';


@NgModule({
  declarations: [
    RappiderHeadingComponent
  ],
  imports: [
    CommonModule,
    RappiderTextModule
  ],
  exports: [
    RappiderHeadingComponent
  ]
})
export class RappiderHeadingModule { }
