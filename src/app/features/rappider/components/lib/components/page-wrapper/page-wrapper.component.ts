import { Component, Input } from '@angular/core';
import { TitleToolbarComponentConfig } from '../../utils/title-toolbar';

@Component({
  selector: 'rappider-page-wrapper',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss']
})
export class RappiderPageWrapperComponent {
  @Input() titleToolbarConfig: TitleToolbarComponentConfig;
}
