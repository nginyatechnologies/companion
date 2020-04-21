import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-activities',
  templateUrl: './job-activities.component.html',
  styleUrls: ['./job-activities.component.scss']
})
export class JobActivitiesComponent implements OnInit {

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
