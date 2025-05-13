import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
book: any;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private cartService: CartService
  ) {}
  

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.book = this.bookService.getBookById(id!);
  }

  addToCart() {
    this.cartService.addToCart(this.book);
    alert('Book added to cart!');
  }

}
