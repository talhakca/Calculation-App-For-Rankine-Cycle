import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderInputLabelComponent } from './input-label.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    RappiderInputLabelComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    RappiderInputLabelComponent
  ]
})
export class RappiderInputLabelModule { }
