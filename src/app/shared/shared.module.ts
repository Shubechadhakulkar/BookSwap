import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
//import { ChooseActionComponent } from './components/choose-action/choose-action.component';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookSummaryCardComponent } from './components/book-summary-card/book-summary-card.component';


@NgModule({
  declarations: [CardsComponent,UserDetailsComponent,BookSummaryCardComponent],
  imports: [
    CommonModule,RouterModule,ReactiveFormsModule
  ],
  exports: [CardsComponent,UserDetailsComponent,BookSummaryCardComponent]
})
export class SharedModule { }
