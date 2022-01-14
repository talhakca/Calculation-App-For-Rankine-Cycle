import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCodemirrorComponent } from './codemirror.component';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

@NgModule({
  declarations: [
    RappiderCodemirrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CodemirrorModule
  ],
  exports: [
    RappiderCodemirrorComponent
  ]
})
export class RappiderCodemirrorModule { }
