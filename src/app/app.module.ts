import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';

//////////////////////
// 추가
import { App1Component } from './components/app1.component';

import { Page1Module } from './pages/page1/page1.module';
import { Page2Module } from './pages/page2/page2.module';
import { Page3Module } from './pages/page3/page3.module';
import { Page4Module } from './pages/page4/page4.module';
import { Page5Module } from './pages/page5/page5.module';
import { Page6Module } from './pages/page6/page6.module';
import { Page7Module } from './pages/page7/page7.module';
import { Page8Module } from './pages/page8/page8.module';
import { Page9Module } from './pages/page9/page9.module';
import { Page10Module } from './pages/page10/page10.module';

const appRoutes: Routes = [
  { path:'', loadChildren:'app/pages/page1/page1.module#Page1Module' },
  { path:'page2', loadChildren:'app/pages/page2/page2.module#Page2Module' },
  { path:'page3', loadChildren:'app/pages/page3/page3.module#Page3Module' },
  { path:'page4', loadChildren:'app/pages/page4/page4.module#Page4Module' },
  { path:'page5', loadChildren:'app/pages/page5/page5.module#Page5Module' },
  { path:'page6', loadChildren:'app/pages/page6/page6.module#Page6Module' },
  { path:'page7', loadChildren:'app/pages/page7/page7.module#Page7Module' },
  { path:'page8', loadChildren:'app/pages/page8/page8.module#Page8Module' },
  { path:'page9', loadChildren:'app/pages/page9/page9.module#Page9Module' },
  { path:'page10', loadChildren:'app/pages/page10/page10.module#Page10Module' },
  { path:'app1', component:App1Component }
]

// 추가 종료
/////////////////////////////
// imports 에 RouterModule.forRoot(appRoutes), Page1Module, Page2Module 추가
// declarations 에 App1Component 추가

@NgModule({
  imports:      [ 
    BrowserModule, RouterModule.forRoot(appRoutes), 
    Page1Module, Page2Module, Page3Module, Page4Module,
    Page5Module, Page6Module, Page7Module, Page8Module, 
    Page9Module, Page10Module
  ],
  declarations: [ AppComponent, App1Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
