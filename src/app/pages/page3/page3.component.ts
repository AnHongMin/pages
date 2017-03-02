import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'page3',
  templateUrl: `page3.component.html`,
  inputs:['childValue']
})

export class Page3Component  {
  childValue:string;

  selectedPost(selectedPost : any){
    alert(JSON.stringify(selectedPost));
  }
}