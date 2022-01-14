import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderTitleBarComponent } from './title-bar.component';
import { RappiderBreadcrumbModule } from '../breadcrumb/breadcrumb.module';
import { RappiderDropdownMenuModule } from '../dropdown-menu/dropdown-menu.module';
import { RappiderIconModule } from '../icon/icon.module';
import { RappiderHeadingModule } from '../heading/heading.module';
import { RappiderTextModule } from '../text/text.module';
import { RappiderButtonModule } from '../button/button.module';


@NgModule({
  declarations: [
    RappiderTitleBarComponent
  ],
  imports: [
    CommonModule,
    RappiderBreadcrumbModule,
    RappiderDropdownMenuModule,
    RappiderIconModule,
    RappiderHeadingModule,
    RappiderTextModule,
    RappiderButtonModule
  ],
  exports: [
    RappiderTitleBarComponent
  ]
})
export class RappiderTitleBarModule { }
