import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page2Component }  from './page2.component';


const routes: Routes = [
    { path:'', component: Page2Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ Page2Component ],
  bootstrap:    [ Page2Component ]
})

export class Page2Module { }
