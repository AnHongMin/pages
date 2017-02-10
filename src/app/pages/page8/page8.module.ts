import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page8Component }  from './page8.component';

const routes: Routes = [
    { path:'', component: Page8Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes), FormsModule ],
  declarations: [ Page8Component ],
  bootstrap:    [ Page8Component ]
})

export class Page8Module { }
