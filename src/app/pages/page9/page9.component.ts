import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page9',
    providers: [],
    templateUrl: `page9.component.html`
})

export class Page9Component  {
    private isDisabled: boolean;
    private myNumber: number;
 
    constructor() {
        this.isDisabled = true;
        this.myNumber = 0;
    }
}
