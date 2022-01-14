import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RappiderHtmlViewerComponent } from './html-viewer.component';


@NgModule({
  declarations: [
    RappiderHtmlViewerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RappiderHtmlViewerComponent
  ]
})
export class RappiderHtmlViewerModule { }
