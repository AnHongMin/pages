import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page7',
    providers: [],
    styles: [`
        .box {
            width: 200px;
            height: 200px;
            display: inline-block;
            background-color: yellow;
        }
    
        .scrollable {
            overflow-y: scroll;
            border: 1px solid grey;
            width: 160px;
            height: 300px;
        }
    `],
    templateUrl: `page7.component.html`
})

export class Page7Component  {
    private positions: string[];
  
    constructor() {
        this.positions = [];
    }
  
    clickedButton($event : any) {
        console.log($event);
        alert("Clicked!");
    }
  
    printMousePosition($event : any) {
        let newPosition = `X: ${$event.clientX} Y: ${$event.clientY}`;
        console.log(newPosition);
        this.positions.push(newPosition);
    }
}
