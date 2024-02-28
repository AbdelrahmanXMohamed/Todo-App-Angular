import { Component } from '@angular/core';
import { Status } from './models/status.enum';
import { TodoItem } from './models/todoitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // item
  getTaskName(taskName: string) {
    this.buildTodoItem(taskName);
  }

  buildTodoItem(taskName: string): TodoItem {
    let item = new TodoItem();
    item.taskName = taskName;
    item.status = Status.ACTIVE;
    return item;
  }
}
