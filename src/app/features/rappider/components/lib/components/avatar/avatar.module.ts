import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { RappiderAvatarComponent } from './avatar.component';

@NgModule({
  declarations: [
    RappiderAvatarComponent
  ],
  imports: [
    CommonModule,
    NzAvatarModule
  ],
  exports: [
    RappiderAvatarComponent
  ]
})
export class RappiderAvatarModule { }
