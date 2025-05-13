import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() categoryName!: string;
  @Input() imageUrl!: string;
  @Input() price!: string;
  @Input() redirectUrl!: string;

  constructor() {}

  ngOnInit(): void {}
}