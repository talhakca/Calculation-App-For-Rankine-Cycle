import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderBannerSplitComponent } from './banner-split.component';


@NgModule({
  declarations: [
    RappiderBannerSplitComponent
  ],
  imports: [
    CommonModule,
    RappiderButtonModule
  ],
  exports: [
    RappiderBannerSplitComponent
  ]
})
export class RappiderBannerSplitModule { }
