import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent implements OnInit {
  sellForm!: FormGroup;
  useISBN = true;

  constructor(private fb: FormBuilder,
     private bookService: BookService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sellForm = this.fb.group({
      adTitle: ['', Validators.required],
      bookInputMode: ['isbn'],
      isbn: [''],
      bookType: ['', Validators.required],
      bookCondition: ['', Validators.required],
      photos: [null],
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: ['', Validators.required],
      shippingCharge: [''],
      freeShipping: [false],
      paymentMode: ['', Validators.required],
      upi: [''],
      bankAccount: ['']
    });
  }

  onISBNFetch() {
    const isbn = this.sellForm.get('isbn')?.value;
    // Call your API to fetch book data using ISBN
    console.log('Fetch book details for ISBN:', isbn);
  }

  onFileChange(event: any) {
    const files = event.target.files;
    if (files.length > 4) {
      alert("You can only upload up to 4 images.");
      return;
    }
    this.sellForm.patchValue({ photos: files });
  }

  submitForm() {
    console.log(this.sellForm.value);
    // Send data to backend
    if (this.sellForm.invalid) {
    alert('Please fill all required fields.');
    return;
  }
  const formData = this.sellForm.value;
  const bookId = this.bookService.addBook(formData);  // Save the book

  // Navigate to book detail page
  this.router.navigate(['/book', bookId]);
  }
}
