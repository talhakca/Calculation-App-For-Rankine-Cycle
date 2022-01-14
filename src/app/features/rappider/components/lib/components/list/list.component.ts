import { Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CardListItem } from '../../utils/card/card-list-item.interface';


@Component({
  selector: 'rappider-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      useExisting: forwardRef(() => RappiderListComponent),
      multi: true
    }
  ]
})
export class RappiderListComponent implements OnInit, ControlValueAccessor, OnChanges {

  @Input() list: CardListItem[];
  @Input() itemHeight = 82;
  @Input() searchable = true;

  listToDisplay: CardListItem[];

  searchText: string;

  /**
   * List value
   *
   * @type {string}
   * @memberof RappiderListComponent
   */
  _value: CardListItem;

  get value() {
    return this._value;
  }

  set value(value: CardListItem) {
    this._value = value;
    this.onChange(value);
    this.onTouched();
  }


  ngOnInit(): void {
    this.listToDisplay = this.list;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.list) {
      this.listToDisplay = this.list;
    }
  }

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: CardListItem) {
    this._value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  onItemClick(item: CardListItem) {
    this.value = item;
  }

  onSearch() {
    this.listToDisplay = this.list.filter(item =>
      item.title.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  getListHeight() {
    const maxHeight = 400;
    const height = this.itemHeight * this.listToDisplay?.length;
    return height > maxHeight ? maxHeight : height;
  }

}
