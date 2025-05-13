import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellComponent } from './main/pages/sell/sell.component';
import { BuyComponent } from './main/pages/buy/buy.component';
import { BookDetailComponent } from './main/pages/book-detail/book-detail.component';
const routes: Routes = [
  {
      path:'',
    loadChildren:()=>import('./main/main.module').then(m => m.MainModule)

    },
    { path: 'sell', component: SellComponent },
  { path: 'buy', component: BuyComponent },
  { path: 'book/:id', component: BookDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
