import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
