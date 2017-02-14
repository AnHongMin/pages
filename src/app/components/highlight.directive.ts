import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {

  constructor(private el: ElementRef) {
//    console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }

  @Input() defaultColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight( this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
