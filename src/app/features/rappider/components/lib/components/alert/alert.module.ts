import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RappiderAlertComponent } from './alert.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';


@NgModule({
  declarations: [
    RappiderAlertComponent
  ],
  imports: [
    CommonModule,
    NzAlertModule,
    NzButtonModule,
    TranslateModule
  ],
  exports: [
    RappiderAlertComponent
  ]
})
export class RappiderAlertModule { }
