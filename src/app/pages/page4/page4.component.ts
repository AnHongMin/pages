import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page4',
    templateUrl: `page4.component.html`
})

export class Page4Component  {
    clickMessage = '';
    values = '';
    values1 = '';
    values2 = '';
    values3 = '';
    
    constructor(){}

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }

    onKey(event: any) { // without type info
        this.values += event.target.value + ' | ';
    }

    onKey1(value: string) {
        this.values1 += value + ' | ';
    }

    onKey2(event: KeyboardEvent) { // with type info
        this.values2 += (<HTMLInputElement>event.target).value + ' | ';
    }
  
    onEnter(value: string) {
        this.values3 = value;
    }
}
