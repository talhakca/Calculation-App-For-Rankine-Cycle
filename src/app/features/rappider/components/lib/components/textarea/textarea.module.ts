import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderTextareaComponent } from './textarea.component';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
  declarations: [
    RappiderTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    TranslateModule
  ],
  exports: [
    RappiderTextareaComponent
  ]
})
export class RappiderTextareaModule { }
