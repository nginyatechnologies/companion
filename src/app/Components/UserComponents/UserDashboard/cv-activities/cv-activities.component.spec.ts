import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvActivitiesComponent } from './cv-activities.component';

describe('CvActivitiesComponent', () => {
  let component: CvActivitiesComponent;
  let fixture: ComponentFixture<CvActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
