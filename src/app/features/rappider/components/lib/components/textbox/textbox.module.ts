import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTextboxComponent } from './textbox.component';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    RappiderTextboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzMentionModule,
    TranslateModule
  ],
  exports: [
    RappiderTextboxComponent
  ]
})
export class RappiderTextboxModule { }
