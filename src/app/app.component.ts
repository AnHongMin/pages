import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav>
  <a [routerLink]="['/']">Home</a>
  <a [routerLink]="['/page2']">Page2</a>
  <a [routerLink]="['/page3']">Page3</a>
  <a [routerLink]="['/page4']">Page4</a>
  <a [routerLink]="['/page5']">Page5</a>
  <a [routerLink]="['/page6']">Page6</a>
  <a [routerLink]="['/page7']">Page7</a>
  <a [routerLink]="['/page8']">Page8</a>
  <a [routerLink]="['/page9']">Page9</a>
  <a [routerLink]="['/page10']">Page10</a>
  <a [routerLink]="['/page11']">Page11</a>
  <a [routerLink]="['/app1']">App1</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {  }
