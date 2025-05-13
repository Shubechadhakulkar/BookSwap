import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }
signup(name: string, email: string, password: string) {
    console.log('Signup Name:', name);
    console.log('Signup Email:', email);
    console.log('Signup Password:', password);
    // Add signup logic here
  }
  ngOnInit(): void {
  }

}
