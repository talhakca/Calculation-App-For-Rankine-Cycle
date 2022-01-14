import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCodemirrorInputFormComponent } from './codemirror-input-form.component';
import { RappiderCodemirrorModule } from '../codemirror/codemirror.module';
import { RappiderButtonModule } from '../button/button.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RappiderCodemirrorInputFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RappiderCodemirrorModule,
    RappiderButtonModule
  ],
  exports: [
    RappiderCodemirrorInputFormComponent
  ]
})
export class RappiderCodemirrorInputFormModule { }
