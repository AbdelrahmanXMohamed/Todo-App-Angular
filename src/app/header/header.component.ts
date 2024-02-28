import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  taskName: string = '';
  @Output() itemAdded = new EventEmitter<string>();

  add(): void {
    if (this.taskName.trim().length) {
      this.itemAdded.emit(this.taskName);
      this.taskName = '';
    }
  }

  updateInput($event: any): void {
    this.taskName = $event.target.value;
  }
}
