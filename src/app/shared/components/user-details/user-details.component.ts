import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Output() formSubmitted = new EventEmitter<any>();

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1)]],
      address: ['']
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.formSubmitted.emit(this.userForm.value);
    }
  }
}
