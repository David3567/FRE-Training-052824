import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  color!: string;
  @Input() colorpass!: string;
  @Input() defaultColor = '';


  constructor(private ele: ElementRef) { }
 
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.colorpass || this.defaultColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  @HostBinding('style.border') border!: string;

  ngOnInit() {
    this.border = "5px solid grey";
  }

  highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }




}
