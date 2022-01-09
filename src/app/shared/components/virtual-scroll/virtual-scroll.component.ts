import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  NgxSmoothScroll,
  NgxSmoothScrollOption,
} from '@eunsatio/ngx-smooth-scroll';

@Component({
  selector: 'virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss'],
})
export class VirtualScrollComponent {
  private readonly config: NgxSmoothScrollOption = {
    duration: 500,
    timingFunction: '.13, 1.07, .51, 1.29',
    stopOnArrival: true,
  };

  @Output() itemChanged = new EventEmitter<number>();

  currentElement = 0;

  @Input() duration = 0.2;

  @Input() padding = 0.2;

  @Input() threshold: number;

  @Input() staticFocus = true;

  @Input() fill = false;

  @Input() fillWithBorder = false;

  @Input() borderWidth: number;

  @Input() borderRadius: number;

  @Input() clearingFocus = true;

  @Input() marginRight: number;

  element: HTMLElement;

  firstPosition: number;

  smoothScroll: NgxSmoothScroll;

  @Output() scrolledDown = new EventEmitter();

  @ViewChild('container') container: ElementRef<HTMLDivElement>;

  focusPosition?: {
    top: number;
    left: number;
    width: number;
    height: number;
  };

  elementBorderRadius?: number;

  borderVisibilty = false;

  ngAfterViewInit(): void {
    this.smoothScroll = new NgxSmoothScroll(this.container.nativeElement);
  }

  focusIn(currentElement: number): void {
    this.currentElement = currentElement;

    const { children } = this.container.nativeElement.children[0];

    if (currentElement >= children.length) {
      this.currentElement = children.length;
    } else if (currentElement < 0) {
      this.currentElement = 0;
    }

    this.element = children[this.currentElement] as HTMLElement;

    this.scrollToElement(this.element.children[0] as HTMLElement);
    if (this.staticFocus) {
      this.setFocusOnElement(this.element.children[0] as HTMLElement);
    }
    const scrollEvent = new CustomEvent('scrollable-event', {
      bubbles: true,
    });
    this.container.nativeElement.dispatchEvent(scrollEvent);
    this.borderVisibilty = true;

    this.itemChanged.emit(this.currentElement);
  }

  scrollToTop() {
    this.container.nativeElement.scroll(0, 0);
  }

  scrollToFirst() {
    this.focusIn(0);
  }

  scrollToElement(element: HTMLElement) {
    const { offsetTop, offsetLeft } = element;
    const { offsetWidth, offsetHeight } = this.container.nativeElement;

    const paddingLeft = offsetWidth * this.padding;
    const paddingTop = offsetHeight * this.padding;

    this.smoothScroll.scrollTo(
      {
        x:
          window.innerWidth <= 650 && this.currentElement > 0
            ? offsetLeft - 17
            : offsetLeft - paddingLeft,
        y: offsetTop - paddingTop,
      },
      this.config,
    );
    if (this.threshold) this.checkThreshold(element);
  }

  setFocusOnElement({
    offsetTop: top,
    offsetLeft: left,
    offsetWidth: width,
    offsetHeight: height,
  }: HTMLElement) {
    const minmax = (value: number, min: number, max: number) =>
      Math.max(Math.min(value, max), min);

    const {
      offsetWidth: containerWidth,
      clientHeight: containerHeight,
      scrollHeight,
      scrollWidth,
    } = this.container.nativeElement;
    const { offsetWidth, offsetHeight } = this.container.nativeElement;
    const paddingLeft = offsetWidth * this.padding;
    const paddingTop = offsetHeight * this.padding;
    const scrollTop = minmax(
      top - paddingTop,
      0,
      scrollHeight - containerHeight,
    );
    const scrollLeft = minmax(
      left - paddingLeft,
      0,
      scrollWidth - containerWidth,
    );

    this.focusPosition = {
      top: top - scrollTop - 2,
      left:
        window.innerWidth <= 650 && this.currentElement > 0
          ? left - scrollLeft - window.innerWidth / 6
          : left - scrollLeft - 3,
      width,
      height,
    };
  }

  private checkThreshold(element: HTMLElement) {
    const targetThreshold =
      100 -
      (element.offsetTop / this.container.nativeElement.scrollHeight) * 100;
    if (targetThreshold <= this.threshold) {
      this.scrolledDown.emit();
    }
  }

  private clearFocus() {
    if (this.clearingFocus) {
      this.focusPosition = null;
    } else {
      this.borderVisibilty = false;
    }
  }
}
