import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page1Component }  from './page1.component';

// app.module.ts 와 마찬가지로 사용할 컴포넌트를 import 한다.
import { Page1WelcomeComponent } from './components/page1-welcome.component';


const routes: Routes = [
    { path:'', component: Page1Component,
        children: [
            //
        ]
     }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ Page1Component, Page1WelcomeComponent ],
  bootstrap:    [ Page1Component ]
})

export class Page1Module { }
