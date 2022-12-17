import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarkTaskAsDoneButtonComponent } from './mark-task-as-done-button/mark-task-as-done-button.component';
import { CreateTaskButtonComponent } from './create-task-button/create-task-button.component';
import { RemoveTaskButtonComponent } from './remove-task-button/remove-task-button.component';
import { ClearTasksListButtonComponent } from './clear-tasks-list-button/clear-tasks-list-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkTaskAsDoneButtonComponent,
    CreateTaskButtonComponent,
    RemoveTaskButtonComponent,
    ClearTasksListButtonComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
