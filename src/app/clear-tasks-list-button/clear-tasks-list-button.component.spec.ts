import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearTasksListButtonComponent } from './clear-tasks-list-button.component';

describe('ClearTasksListButtonComponent', () => {
  let component: ClearTasksListButtonComponent;
  let fixture: ComponentFixture<ClearTasksListButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearTasksListButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearTasksListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
