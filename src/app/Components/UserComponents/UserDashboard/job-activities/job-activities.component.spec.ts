import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobActivitiesComponent } from './job-activities.component';

describe('JobActivitiesComponent', () => {
  let component: JobActivitiesComponent;
  let fixture: ComponentFixture<JobActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
