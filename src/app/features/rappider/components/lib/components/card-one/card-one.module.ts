import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardOneComponent } from './card-one.component';
import { RappiderImageModule } from '../image/image.module';
import { RappiderRateDisplayModule } from '../rate-display/rate-display.module';
import { RappiderTagModule } from '../tag/tag.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderParagraphModule } from '../paragraph/paragraph.module';

@NgModule({
  declarations: [
    RappiderCardOneComponent
  ],
  imports: [
    CommonModule,
    RappiderImageModule,
    RappiderTagModule,
    RappiderTextModule,
    RappiderRateDisplayModule,
    RappiderHeadingModule,
    RappiderButtonModule,
    RappiderParagraphModule
  ],
  exports: [
    RappiderCardOneComponent
  ]
})
export class RappiderCardOneModule { }
