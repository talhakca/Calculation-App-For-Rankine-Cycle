import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderRadioComponent } from './radio.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';


@NgModule({
  declarations: [
    RappiderRadioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzRadioModule,
    TranslateModule
  ],
  exports: [
    RappiderRadioComponent
  ]
})
export class RappiderRadioModule { }
