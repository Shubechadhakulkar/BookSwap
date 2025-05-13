import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './book-detail/book-detail.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'sell', component: SellComponent }
];



@NgModule({
  declarations: [
    HomepageComponent,
    BuyComponent,
    SellComponent,
    BookDetailComponent
   

  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)

  ],
  exports: [HomepageComponent,BuyComponent,SellComponent] 

})
export class PagesModule { }
