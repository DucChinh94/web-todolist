import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from "../Task";
import { TodoService } from '../todo/todo.service';

@Component({
  selector: 'app-content-body2',
  templateUrl: './content-body2.component.html',
  styleUrls: ['./content-body2.component.css']
})
export class ContentBody2Component implements OnInit {

  public tasks: Task[] = [];
  public subscription!: Subscription;
  public deleteCount: number = 0;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getDeletedTodoList(); 
    this.todoService.searchDeleted.subscribe(()=>
    {
      this.tasks=this.todoService.taskDeletedSearch;
    })
  }

  // get Deleted TodoList
  getDeletedTodoList() {
    this.subscription = this.todoService.getDeletedTodoList().subscribe(data => {
      this.tasks = data.item;
      this.todoService.deletedCount$.next(this.tasks.length);
    });
  }

}
