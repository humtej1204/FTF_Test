import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDataViewerComponent } from './repo-data-viewer.component';

describe('RepoDataViewerComponent', () => {
  let component: RepoDataViewerComponent;
  let fixture: ComponentFixture<RepoDataViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoDataViewerComponent]
    });
    fixture = TestBed.createComponent(RepoDataViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
