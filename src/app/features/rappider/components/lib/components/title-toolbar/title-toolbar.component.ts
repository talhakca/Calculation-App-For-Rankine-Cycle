import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BreadcrumbOption } from '../../utils/breadcrumb/breadcrumb-option.interface';

@Component({
  selector: 'rappider-title-toolbar',
  templateUrl: './title-toolbar.component.html',
  styleUrls: ['./title-toolbar.component.scss']
})
export class RappiderTitleToolbarComponent implements OnChanges {

  @Input() mainTitle: string;
  /* flag to display or hide the toolbar */
  @Input() displayToolbar = true;
  /* explicit option to pass to the toolbar in order to set the visiblity of back button */
  @Input() displayToolbarBackButton = true;
  @Input() options: BreadcrumbOption[] | string[] | string;

  ngOnChanges(changes: SimpleChanges): void {
    this.mapTitleBreadcrumbOptionsToLabel(changes.options?.currentValue);
  }

  mapTitleBreadcrumbOptionsToLabel(value: any) {
    if (value && typeof value[0] === 'string') {
      try {
        this.options = value.map(item => ({
          label: item
        }));
      } catch (error) {
        this.options = [{ label: value }];
      }
    }
  }

}
