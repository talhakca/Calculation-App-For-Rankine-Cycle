import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderIconBlockComponent } from './icon-block.component';
import { RappiderAvatarModule } from '../avatar/avatar.module';


@NgModule({
  declarations: [
    RappiderIconBlockComponent
  ],
  imports: [
    CommonModule,
    RappiderAvatarModule
  ],
  exports: [
    RappiderIconBlockComponent
  ]
})
export class RappiderIconBlockModule { }
