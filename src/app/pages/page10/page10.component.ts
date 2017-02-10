import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'page10',
    templateUrl: `page10.component.html`
})

export class Page10Component  {
    name : string; 
    email : string;
    address : address;
    hobbies : string[];
    showHobbies : boolean;
  
    constructor() {
        //  this.name = 'Sam';
        // console.log(' constructor ran');
        this.name = 'Hongmin.An'; 
        this.email = "hmahn@mpc.co.kr";
        this.address = {
        street : "1",
        city : '2',
        state : '2'
        }
        this.hobbies = [
        'music', 'game'
        ]
        this.showHobbies = false;
    }

    toggleHobbies(){
        if(this.showHobbies == true){
            this.showHobbies = false;
        }else{
            this.showHobbies = true;
        }
    }

    addHobby(hobby : any){
        this.hobbies.push(hobby);
    }

    deleteHobby(i : any){
        this.hobbies.splice(i,1);
    }


}

interface address {
  street : string;
  city : string;
  state : string;
}
