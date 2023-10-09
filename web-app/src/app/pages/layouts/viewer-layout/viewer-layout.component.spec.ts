import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerLayoutComponent } from './viewer-layout.component';

describe('ViewerLayoutComponent', () => {
  let component: ViewerLayoutComponent;
  let fixture: ComponentFixture<ViewerLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewerLayoutComponent]
    });
    fixture = TestBed.createComponent(ViewerLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
