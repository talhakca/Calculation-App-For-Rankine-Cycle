import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderIconComponent } from './icon.component';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    RappiderIconComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NzIconModule
  ],
  exports: [
    RappiderIconComponent
  ]
})
export class RappiderIconModule { }
