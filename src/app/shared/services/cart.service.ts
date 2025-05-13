import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: any[] = [];

  addToCart(book: any) {
    this.cartItems.push(book);
  }

  getCartItems() {
    return this.cartItems;
  }
}