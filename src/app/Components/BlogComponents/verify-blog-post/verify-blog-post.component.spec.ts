import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyBlogPostComponent } from './verify-blog-post.component';

describe('VerifyBlogPostComponent', () => {
  let component: VerifyBlogPostComponent;
  let fixture: ComponentFixture<VerifyBlogPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyBlogPostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
