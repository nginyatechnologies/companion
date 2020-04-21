import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyJobPostComponent } from './verify-job-post.component';

describe('VerifyJobPostComponent', () => {
  let component: VerifyJobPostComponent;
  let fixture: ComponentFixture<VerifyJobPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyJobPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyJobPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
