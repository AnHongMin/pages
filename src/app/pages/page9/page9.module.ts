import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page9Component }  from './page9.component';

const routes: Routes = [
    { path:'', component: Page9Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes), FormsModule ],
  declarations: [ Page9Component ],
  bootstrap:    [ Page9Component ]
})

export class Page9Module { }
