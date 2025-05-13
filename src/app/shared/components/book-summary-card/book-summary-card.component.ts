  import { Component, OnInit ,Input} from '@angular/core';
  
@Component({
  selector: 'app-book-summary-card',
  templateUrl: './book-summary-card.component.html',
  styleUrls: ['./book-summary-card.component.scss']
})
export class BookSummaryCardComponent implements OnInit {
  @Input() book: any;
  constructor() { }

  ngOnInit(): void {
  }

}
