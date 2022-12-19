import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-task-button',
  templateUrl: './create-task-button.component.html',
  styleUrls: ['./create-task-button.component.css']
})
export class CreateTaskButtonComponent{

  @Input() taskName!: string;
  @Input() deadline!: string;

  stringNotNull() {
    if (this.taskName != '' && this.deadline != '')
      return false;
    else
      return true;
  }

  @Output() createTask = new EventEmitter<void>;
}
