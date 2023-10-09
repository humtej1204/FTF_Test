import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsHistoryTableComponent } from './commits-history-table.component';

describe('CommitsHistoryTableComponent', () => {
  let component: CommitsHistoryTableComponent;
  let fixture: ComponentFixture<CommitsHistoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommitsHistoryTableComponent]
    });
    fixture = TestBed.createComponent(CommitsHistoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
