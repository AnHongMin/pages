import { NgModule }             from '@angular/core';
//import { BrowserModule }        from '@angular/platform-browser';
import { ReactiveFormsModule }  from '@angular/forms';  // <-- #1 import module

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page11Component }  from './page11.component';
import { HeroDetailComponent } from './hero-detail.component'; // <-- #1 import component
import { HeroListComponent }   from './hero-list.component';

import { HeroService }         from './hero.service'; //  <-- #1 import service

const routes: Routes = [
    { path:'', component: Page11Component,
        children: [
            //
        ]
     }
]

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        ReactiveFormsModule // <-- #2 add to Angular module imports 
    ],
    declarations: [
        Page11Component 
        , HeroDetailComponent
        , HeroListComponent
    ],
    exports: [ // export for the DemoModule
        Page11Component,
        HeroDetailComponent,
        HeroListComponent
    ],
    providers: [ HeroService ], // <-- #4 provide HeroService
    bootstrap: [ Page11Component ]
})

export class Page11Module { }
