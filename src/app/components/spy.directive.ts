import { Directive, ElementRef, OnInit, OnDestroy }        from '@angular/core';

// Spy on any element to which it is applied.
// Usage: <div mySpy>...</div>
@Directive({selector: '[mySpy]'})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private el: ElementRef) {
  }

  // https://angular.io/docs/ts/latest/api/core/index/OnInit-class.html
  ngOnInit()    { this.logIt(`onInit`); }

  // https://angular.io/docs/ts/latest/api/core/index/OnDestroy-class.html
  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    console.log('SpyDirective > ' + msg);
    console.log(this.el);
  }
}
