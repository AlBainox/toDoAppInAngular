import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTaskButtonComponent } from './remove-task-button.component';

describe('RemoveTaskButtonComponent', () => {
  let component: RemoveTaskButtonComponent;
  let fixture: ComponentFixture<RemoveTaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTaskButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
