import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public welcomeMessage: string;

  constructor() {
    this.welcomeMessage = `Bienvenido ${ localStorage.getItem('userName') || '' }!`;
  }

  ngOnInit(): void {
  }

}
