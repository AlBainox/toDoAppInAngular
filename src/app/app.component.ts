import { Component } from '@angular/core';
import { Task } from './Models/Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań';
  tasks: Task[] = [];
  taskName = '';
  deadline = '';
  taskDone = false;

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: this.deadline,
      done: false,
    };
    this.tasks.push(task);
    this.taskName = '';
    this.deadline = '';
    this.taskDone = false;
  }

  clearTask() {
    this.tasks = [];
  }

  markTaskAsDone(task: Task) {
    task.done = true;
  }
  
  removeTask(task: Task)
  {
    this.tasks = this.tasks.filter(x=> x !== task);
  }
}
