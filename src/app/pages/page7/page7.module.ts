import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page7Component }  from './page7.component';

const routes: Routes = [
    { path:'', component: Page7Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes), FormsModule ],
  declarations: [ Page7Component ],
  bootstrap:    [ Page7Component ]
})

export class Page7Module { }
