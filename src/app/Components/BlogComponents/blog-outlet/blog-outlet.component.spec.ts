import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOutletComponent } from './blog-outlet.component';

describe('BlogOutletComponent', () => {
  let component: BlogOutletComponent;
  let fixture: ComponentFixture<BlogOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlogOutletComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
