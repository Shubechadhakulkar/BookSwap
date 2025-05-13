import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/shared/services/book.service'; 
@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

 books: any[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

}
