import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderCardOneListComponent } from './card-one-list.component';
import { RappiderCardOneModule } from '../card-one/card-one.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderButtonModule } from '../button/button.module';
@NgModule({
  declarations: [
    RappiderCardOneListComponent
  ],
  imports: [
    CommonModule,
    RappiderCardOneModule,
    RappiderHeadingModule,
    RappiderButtonModule
  ],
  exports: [
    RappiderCardOneListComponent
  ]
})
export class RappiderCardOneListModule { }
