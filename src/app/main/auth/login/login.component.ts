import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }
  login(email: string, password: string) {
    console.log('Login Email:', email);
    console.log('Login Password:', password);
    // Add login logic here
  }
  ngOnInit(): void {
  }

}
