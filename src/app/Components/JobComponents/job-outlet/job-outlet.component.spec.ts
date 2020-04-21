import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOutletComponent } from './job-outlet.component';

describe('JobOutletComponent', () => {
  let component: JobOutletComponent;
  let fixture: ComponentFixture<JobOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
