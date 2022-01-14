import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderProductOneComponent } from './product-one.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';

@NgModule({
  declarations: [
    RappiderProductOneComponent
  ],
  imports: [
    CommonModule,
    RappiderImageModule,
    RappiderTagModule,
    RappiderTextModule,
    RappiderRateDisplayModule,
    RappiderHeadingModule
  ],
  exports: [
    RappiderProductOneComponent
  ]
})
export class RappiderProductOneModule { }
