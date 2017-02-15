import { Directive, ElementRef }        from '@angular/core';

// Spy on any element to which it is applied.
// Usage: <div mySpy>...</div>
@Directive({selector: '[mySpy]'})
export class SpyDirective implements OnInit, OnDestroy {

  constructor(private el: ElementRef) {
   }

  ngOnInit()    { this.logIt(`onInit`); }

  ngOnDestroy() { this.logIt(`onDestroy`); }

  private logIt(msg: string) {
    console.log('SpyDirective > ' + msg);
    console.log(this.el);
  }
}
