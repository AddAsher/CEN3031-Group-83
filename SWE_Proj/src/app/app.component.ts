import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})




@Component({
  selector: 'app-root',
  template: `
  <ul>
  <li *ngFor="let user of users">{{ user.name }}</li>
  </ul>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  password: string = "";
  username: string = "";
  title = 'PACK';
  users: any[] = [];

  constructor(private authService: AuthService) { }

  onSubmit() {
    console.log("Submitting login request:", this.username, this.password);
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log("Login request received on Front end");
      },
      (error) => {
        console.log(error);
      }
    );
  }

  buttonPress() {
    alert("Login button clicked")
    this.onSubmit();
    document.forms[0].reset();
  }
}