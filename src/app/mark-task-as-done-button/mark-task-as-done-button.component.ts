import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../Models/Task';

@Component({
  selector: 'app-mark-task-as-done-button',
  templateUrl: './mark-task-as-done-button.component.html',
  styleUrls: ['./mark-task-as-done-button.component.css']
})
export class MarkTaskAsDoneButtonComponent{
@Output() markTaskAsDone = new EventEmitter<Task>;
}
