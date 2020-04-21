import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  // Setting the selected Theme;
  selectedTheme = localStorage.getItem('currentTheme');

  login = JSON.parse(localStorage.getItem('login'));


  ngOnInit(): void {
  }

}
