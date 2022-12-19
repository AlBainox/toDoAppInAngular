import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../Models/Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
 
  @Output() removeTask = new EventEmitter<Task>;
  @Output() markTaskAsDone = new EventEmitter<Task>;
  @Output() clearTask = new EventEmitter<void>;


 
}
