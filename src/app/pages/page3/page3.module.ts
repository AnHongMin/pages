import { NgModule }      from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Page3Component }  from './page3.component';
import { HighlightDirective }  from '../../components/highlight.directive';
import { SpyDirective }  from '../../components/spy.directive';
import { PostsComponent } from './components/posts.component';
import { NewPostComponent } from './components/new-post.component';

const routes: Routes = [
    { path:'', component: Page3Component,
        children: [
            //
        ]
     },
     { path:'newPost/:id', component:NewPostComponent }
]

@NgModule({
  imports:      [ CommonModule, RouterModule.forChild(routes), FormsModule, HttpModule ],
  declarations: [ Page3Component, HighlightDirective, SpyDirective, PostsComponent, NewPostComponent ],
  bootstrap:    [ Page3Component ]
})

export class Page3Module { }
