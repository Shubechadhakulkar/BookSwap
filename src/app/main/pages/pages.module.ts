import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';



@NgModule({
  declarations: [
    HomepageComponent,
    BuyComponent,
    SellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
