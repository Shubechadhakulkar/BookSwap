import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  books = [
  {
    title: 'WordPress – Coming of Age in the Milky Way',
    price: '11',
    image: 'assets/images/Book.jpg',
    link: '/product/1'
  },
  {
    title: 'The Ashes of London',
    price: '18',
    image: 'assets/images/Book.jpg',
    link: '/product/2'
  },
  {
    title: 'Abraham Lincoln A History',
    price: '55',
    image: 'assets/images/Book.jpg',
    link: '/product/3'
  },
  {
    title: 'Billions Billions',
    price: '18',
    image: 'assets/images/Book.jpg',
    link: '/product/4'
  },
  {
    title: 'The Godfather',
    price: '52',
    image: 'assets/images/Book.jpg',
    link: '/product/5'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
