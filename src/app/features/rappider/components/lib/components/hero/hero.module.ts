import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHeroComponent } from './hero.component';
import { RappiderButtonModule } from '../button/button.module';


@NgModule({
  declarations: [
    RappiderHeroComponent
  ],
  imports: [
    CommonModule,
    RappiderButtonModule
  ],
  exports: [
    RappiderHeroComponent
  ]
})
export class RappiderHeroModule { }
