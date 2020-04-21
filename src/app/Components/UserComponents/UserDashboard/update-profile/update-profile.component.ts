import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  links = ['home', 'About', 'People'];

  constructor() { }
  Status = JSON.parse(localStorage.getItem('status'));
  toggleLogin = JSON.parse(localStorage.getItem('login'));
  ngOnInit(): void {
  }
  loginToggler(e) {
    this.toggleLogin = !this.toggleLogin;
    if (this.toggleLogin) {
      this.Status = 'Logged In';
      localStorage.setItem('login', JSON.stringify(this.toggleLogin));
      localStorage.setItem('status', JSON.stringify('Logged In'));
    } else {
      if (!this.toggleLogin) {
        this.Status = 'Logged Out';
        localStorage.setItem('login', JSON.stringify(this.toggleLogin));
        localStorage.setItem('status', JSON.stringify('Logged Out'));
      }
    }
  }

  dataSource = [30, 10, 47, 78, 95, 68, 89];
}
