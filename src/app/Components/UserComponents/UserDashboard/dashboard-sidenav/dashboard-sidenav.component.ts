import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidenav',
  templateUrl: './dashboard-sidenav.component.html',
  styleUrls: ['./dashboard-sidenav.component.scss']
})
export class DashboardSidenavComponent implements OnInit {

  constructor() { }

  // User fake object
  user = {
    firstName: 'Kambang',
    lastName: 'Sinclaire Sume'
  };
  onAction() { }


  ngOnInit(): void {
  }

}
