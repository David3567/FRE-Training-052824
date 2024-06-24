import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {
  color!: string;
  @Input() colorpass!: string;
  @Input() defaultColor = '';

  @HostListener('mouseenter')
  onMouserEnter() {
    this.highlight(this.colorpass || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouserLeave() {
    this.highlight('');
  }

  // @HostBinding('disabled') disable: boolean = true;
  @HostBinding('style.border') border: string = "5px solid blue";

  constructor(private ele: ElementRef) { }

  highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
