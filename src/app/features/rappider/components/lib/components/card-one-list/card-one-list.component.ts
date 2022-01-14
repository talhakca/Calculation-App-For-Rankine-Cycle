import { transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import {
  ButtonComponentConfig,
  ButtonShape,
  CardOneButtonOutput,
  CardOneComponentConfig,
  cardOneListCarouselLeftSlideAnimation,
  cardOneListCarouselRightSlideAnimation,
  HeadingComponentConfig,
  IconType
} from '../../utils';

@Component({
  selector: 'rappider-card-one-list',
  templateUrl: './card-one-list.component.html',
  styleUrls: ['./card-one-list.component.scss'],
  animations: [
    trigger('carouselSlide', [
      transition(':increment', cardOneListCarouselRightSlideAnimation),
      transition(':decrement', cardOneListCarouselLeftSlideAnimation),
    ]),
  ]
})
export class RappiderCardOneListComponent implements OnInit, OnChanges {

  /**
   * data to emit
   *
   * @type {*}
   * @memberof RappiderCardOneListComponent
   */
  @Input() data: any;

  /**
   * data for list
   *
   * @type {CardOneComponentConfig[]}
   * @memberof RappiderCardOneListComponent
   */
  @Input() listData: CardOneComponentConfig[];

  /**
   * heading of the list
   *
   * @type {HeadingComponentConfig}
   * @memberof RappiderCardOneListComponent
   */
  @Input() listHeading: HeadingComponentConfig;

  /**
   * button located in top-right of the card
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderCardOneListComponent
   */
  @Input() headerButton: ButtonComponentConfig;

  /**
   * carousel next button
   * default: > icon
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderCardOneListComponent
   */
  @Input() nextButton: ButtonComponentConfig;

  /**
   * carousel back button
   * default: < icon
   *
   * @type {ButtonComponentConfig}
   * @memberof RappiderCardOneListComponent
   */
  @Input() backButton: ButtonComponentConfig;

  /**
   * item count of per carousel page
   *
   * @type {number}
   * @memberof RappiderCardOneListComponent
   */
  @Input() slidesPerView: number;

  /**
   * visibilty of caruosel pagination dots
   *
   * @type {boolean}
   * @memberof RappiderCardOneListComponent
   */
  @Input() isCarouselPaginatorVisible: boolean;

  @Output() cardOneClick = new EventEmitter();
  @Output() cardOneAdditionalButtonClick = new EventEmitter<CardOneButtonOutput>();
  @Output() cardOneImageButtonClick = new EventEmitter<CardOneButtonOutput>();
  @Output() headerButtonClick = new EventEmitter<CardOneButtonOutput>();

  displayedData = [];
  currentIndex = 0;

  ngOnInit(): void {
    this.initDefaults();
    this.setDisplayedData();
  }

  ngOnChanges(): void {
    this.initDefaults();
    this.setDisplayedData();
  }

  initDefaults() {
    if (!this.nextButton) {
      this.nextButton = {
        icon: {
          name: 'right',
          type: IconType.NgZorro
        },
        shape: ButtonShape.Circle
      };
    }

    if (!this.backButton) {
      this.backButton = {
        icon: {
          name: 'left',
          type: IconType.NgZorro
        },
        shape: ButtonShape.Circle
      };
    }

    if (this.slidesPerView == null) {
      this.slidesPerView = 4;
    }

    if (this.isCarouselPaginatorVisible == null) {
      this.isCarouselPaginatorVisible = false;
    }
  }

  /**
   * slices listData by slidesPerView value and assigns to displayedData
   *
   * @memberof RappiderCardOneListComponent
   */
  setDisplayedData() {
    for (let i = 0; i < this.listData.length; i += this.slidesPerView) {
      this.displayedData.push(
        this.listData.slice(i, i + this.slidesPerView)
      );
    }
  }

  onClickHeaderButton(button: ButtonComponentConfig) {
    this.headerButtonClick.emit({ button: button, data: this.data });
  }

  onClickCardOneAdditionalButton(event: CardOneButtonOutput) {
    this.cardOneAdditionalButtonClick.emit(event);
  }

  onClickCardOneImageButton(event: CardOneButtonOutput) {
    this.cardOneImageButtonClick.emit(event);
  }

  onClickCardOne(event: any) {
    this.cardOneClick.emit(event);
  }

  handleDotClass(index: number) {
    return index === this.currentIndex ? 'dot dot-active' : 'dot';
  }

  onClickDot(index: number) {
    this.currentIndex = index;
  }

  onClickBack() {
    if (0 < this.currentIndex) {
      this.currentIndex -= 1;
    } else {
      this.currentIndex = this.displayedData.length - 1;
    }
  }

  onClickNext() {
    if (this.listData.length / this.slidesPerView > this.currentIndex + 1) {
      this.currentIndex += 1;
    } else {
      this.currentIndex = 0;
    }
  }


}
