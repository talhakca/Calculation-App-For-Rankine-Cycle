import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginationSize } from '../../utils/pagination/pagination-size.enum';

@Component({
  selector: 'rappider-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class RappiderPaginationComponent {

  // current page number，double binding
  @Input() pageIndex: number;
  // total number of data items
  @Input() total: number;
  // disable pagination
  @Input() disabled: boolean;
  // specify the size of nz-pagination, can be set to small
  @Input() size: PaginationSize;
  // number of data items per page, double binding
  @Input() pageSize = 10;
  // whether to use simple mode
  @Input() isSimple: boolean;

  // current page number change callback
  @Output() pageSizeChange = new EventEmitter<number>();
  // current page number change callback
  @Output() pageIndexChange = new EventEmitter<number>();

  onPageSizeChange(pageSize: number) {
    this.pageSizeChange.emit(pageSize);
  }

  onPageIndexChange(pageSize: number) {
    this.pageIndexChange.emit(pageSize);
  }
}
