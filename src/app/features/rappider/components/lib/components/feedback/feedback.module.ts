import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderFeedbackComponent } from './feedback.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzResultModule } from 'ng-zorro-antd/result';


@NgModule({
  declarations: [
    RappiderFeedbackComponent
  ],
  imports: [
    CommonModule,
    NzResultModule,
    NzButtonModule,
    TranslateModule
  ],
  exports: [
    RappiderFeedbackComponent
  ]
})
export class RappiderFeedbackModule { }
