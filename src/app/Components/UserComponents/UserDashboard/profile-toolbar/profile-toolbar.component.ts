import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-profile-toolbar',
  templateUrl: './profile-toolbar.component.html',
  styleUrls: ['./profile-toolbar.component.scss']
})
export class ProfileToolbarComponent implements OnInit {

  userId;
  sidenavToggler = 'menu';
  openProfileToolbar = false;
  @Input() toggleDrawerSignal;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.activeRoute.paramMap.subscribe(params => {
      this.userId = +params.get('id');
    });
    console.log(this.userId);

    if (this.userId != null) {
      this.openProfileToolbar = true;
    } else {
      this.openProfileToolbar = false;
    }
  }

  openSideNav() {
    this.toggleDrawerSignal.toggle().then((mode) => {
      if (mode === 'open') {
        this.sidenavToggler = 'clear';
      } else {
        this.sidenavToggler = 'menu';
      }
    });
  }



}
