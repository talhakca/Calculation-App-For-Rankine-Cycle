import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderButtonComponent } from './button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderIconModule } from '../icon/icon.module';


@NgModule({
  declarations: [
    RappiderButtonComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    TranslateModule,
    RappiderIconModule
  ],
  exports: [
    RappiderButtonComponent
  ]
})
export class RappiderButtonModule { }
