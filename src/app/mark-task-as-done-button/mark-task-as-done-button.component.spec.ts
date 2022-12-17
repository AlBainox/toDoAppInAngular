import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkTaskAsDoneButtonComponent } from './mark-task-as-done-button.component';

describe('MarkTaskAsDoneButtonComponent', () => {
  let component: MarkTaskAsDoneButtonComponent;
  let fixture: ComponentFixture<MarkTaskAsDoneButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkTaskAsDoneButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkTaskAsDoneButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
