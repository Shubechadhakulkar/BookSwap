import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSummaryCardComponent } from './book-summary-card.component';

describe('BookSummaryCardComponent', () => {
  let component: BookSummaryCardComponent;
  let fixture: ComponentFixture<BookSummaryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSummaryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSummaryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
