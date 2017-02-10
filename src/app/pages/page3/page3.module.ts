import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page3Component }  from './page3.component';

const routes: Routes = [
    { path:'', component: Page3Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes), FormsModule, HttpModule ],
  declarations: [ Page3Component ],
  bootstrap:    [ Page3Component ]
})

export class Page3Module { }
