import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TODOS } from './mock-todo';

@Component
({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: 
        `<ul *ngFor="let todos of todolist">
          <li *ngIf="todos.isCompleted">{{todos.title}}</li>
        </ul>`,
  styles: []
})

export class AppComponent {
  todolist = TODOS;

  ngOnInit()
  {
    console.table(this.todolist);
    this.selectToDo(8)
  }

  selectToDo(id: number)
  {
    console.table(this.todolist[id-1]);
  }
}
