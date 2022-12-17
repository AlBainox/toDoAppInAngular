import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-remove-task-button',
  templateUrl: './remove-task-button.component.html',
  styleUrls: ['./remove-task-button.component.css']
})
export class RemoveTaskButtonComponent{
@Output() removeTask = new EventEmitter<Task>;
}
