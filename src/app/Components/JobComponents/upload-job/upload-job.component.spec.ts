import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadJobComponent } from './upload-job.component';

describe('UploadJobComponent', () => {
  let component: UploadJobComponent;
  let fixture: ComponentFixture<UploadJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
