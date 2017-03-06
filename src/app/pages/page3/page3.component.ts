import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'page3',
  templateUrl: `page3.component.html`,
  inputs:['childValue', 'startDateValue']
})

export class Page3Component  {
  

  startDateValue : string;
  childValue:string;

  selectedPost(selectedPost : any){
    alert(JSON.stringify(selectedPost));
  }
}