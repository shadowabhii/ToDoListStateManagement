import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodoAdd } from 'src/app/actions/todo.actions';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  constructor(private store :Store<{todos :Todo}>) { }

  AddTodo(todo : string)
  {
    const newTodo=new Todo();
    newTodo.title=todo;
    this.store.dispatch(new TodoAdd(newTodo));
    console.log(newTodo);
  }

  

  

  ngOnInit(): void {
  }

}
