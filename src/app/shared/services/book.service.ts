import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({ providedIn: 'root' })
export class BookService {
  private books: any[] = [];
  private booksSubject = new BehaviorSubject<any[]>([]);

  books$ = this.booksSubject.asObservable();

  addBook(book: any) {
    const newBook = { ...book, id: uuidv4() };
    this.books.push(newBook);
    this.booksSubject.next(this.books);
    return newBook.id;
  }

  getBookById(id: string) {
    return this.books.find(b => b.id === id);
  }

  getAllBooks() {
    return this.books;
  }
  getBooks(): any[] {
    return this.books;
  }
}
