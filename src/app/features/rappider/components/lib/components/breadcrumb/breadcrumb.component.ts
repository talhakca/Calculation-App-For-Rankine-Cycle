import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbOption } from '../../utils/breadcrumb/breadcrumb-option.interface';

@Component({
  selector: 'rappider-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class RappiderBreadcrumbComponent {

  @Input() options: BreadcrumbOption[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() cssStyle: any;

  @Output() optionClick = new EventEmitter<BreadcrumbOption>();

  constructor(
    public router: Router
    // eslint-disable-next-line no-empty-function
  ) { }

  onBreadcrumbOptionClick(option: BreadcrumbOption) {
    /* emit clicked breadcrumb */
    this.emitBreadcrumbOption(option);
    /* redirect if specified */
    if (option.redirectUrl) {
      this.router.navigate([option.redirectUrl], { queryParams: option?.queryParams });
    }
  }

  emitBreadcrumbOption(breadcrumbOption: BreadcrumbOption) {
    this.optionClick.emit(breadcrumbOption);
  }

}
