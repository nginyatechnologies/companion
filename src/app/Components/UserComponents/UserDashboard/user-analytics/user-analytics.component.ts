import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-analytics',
  templateUrl: './user-analytics.component.html',
  styleUrls: ['./user-analytics.component.scss']
})
export class UserAnalyticsComponent implements OnInit {

  constructor() { }
  loading = 'Loading';
  mode = 'indeterminate';
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = '';
      this.mode = 'determinate';
    }, 8000);
  }

}
