import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderParagraphComponent } from './paragraph.component';
import { RappiderTextModule } from '../text/text.module';


@NgModule({
  declarations: [
    RappiderParagraphComponent
  ],
  imports: [
    CommonModule,
    RappiderTextModule
  ],
  exports: [
    RappiderParagraphComponent
  ]
})
export class RappiderParagraphModule { }
