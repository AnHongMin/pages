import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
  <li><a [routerLink]="['/']">Home</a></li>
  <li><a [routerLink]="['/page2']">Page2</a></li>
  <li><a [routerLink]="['/page3']">Page3</a></li>
  <li><a [routerLink]="['/page4']">Page4</a></li>
  <li><a [routerLink]="['/page5']">Page5</a></li>
  <li><a [routerLink]="['/page6']">Page6</a></li>
  <li><a [routerLink]="['/page7']">Page7</a></li>
  <li><a [routerLink]="['/page8']">Page8</a></li>
  <li><a [routerLink]="['/page9']">Page9</a></li>
  <li><a [routerLink]="['/page10']">Page10</a></li>
  <li><a [routerLink]="['/page11']">Page11</a></li>
  <li><a [routerLink]="['/app1']">App1</a></li>  
  </ul>
  <router-outlet></router-outlet>
  `,
})
export class AppComponent  {  }
