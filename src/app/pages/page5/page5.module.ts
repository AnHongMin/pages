import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page5Component }  from './page5.component';

const routes: Routes = [
    { path:'', component: Page5Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes), FormsModule ],
  declarations: [ Page5Component ],
  bootstrap:    [ Page5Component ]
})

export class Page5Module { }
