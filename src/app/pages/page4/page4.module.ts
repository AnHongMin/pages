import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page4Component }  from './page4.component';

const routes: Routes = [
    { path:'', component: Page4Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes), FormsModule ],
  declarations: [ Page4Component ],
  bootstrap:    [ Page4Component ]
})

export class Page4Module { }
