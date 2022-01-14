import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonModule } from '../button/button.module';
import { RappiderBannerComponent } from './banner.component';


@NgModule({
  declarations: [
    RappiderBannerComponent
  ],
  imports: [
    CommonModule,
    RappiderButtonModule
  ],
  exports: [
    RappiderBannerComponent
  ]
})
export class RappiderBannerModule { }
