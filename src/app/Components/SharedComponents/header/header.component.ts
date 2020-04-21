import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() appTheme = new EventEmitter();

  userId = 2;

  themes = [
    { name: 'Blue', value: 'blue-dark-theme' },
    { name: 'Pink', value: 'pink-dark-theme' },
    { name: 'Indigo', value: 'indigo-dark-theme' },
    { name: 'Cyan', value: 'cyan-dark-theme' },
    { name: 'Teal', value: 'teal-dark-theme' },
    { name: 'Default', value: 'default' }
  ];

  showProfileNavbar = false;
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  // Theming the app
  selectTheme(theme) {
    this.appTheme.emit(theme);
    localStorage.setItem('currentTheme', theme);
  }

  openUserProfile() {
    this.router.navigate(['user/dashboard/profile', this.userId]);
  }
}
