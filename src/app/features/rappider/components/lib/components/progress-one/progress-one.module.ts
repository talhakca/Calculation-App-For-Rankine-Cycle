import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RappiderProgressOneComponent } from './progress-one.component';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzProgressModule } from 'ng-zorro-antd/progress';


@NgModule({
  declarations: [
    RappiderProgressOneComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzProgressModule,
    NzBadgeModule
  ],
  exports: [
    RappiderProgressOneComponent
  ]
})
export class RappiderProgressOneModule { }
