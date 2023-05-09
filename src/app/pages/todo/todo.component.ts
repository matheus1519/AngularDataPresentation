import { Component } from '@angular/core';

interface TodoItem {
  name: string
  isChecked: boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todos: TodoItem[] = []
  todo = ''

  editing = {
    is: false,
    index: -1
  }

  onAddTodo(){
    if(this.editing.is){

      this.todos[this.editing.index].name = this.todo 

      this.editing.is = false
      this.todo = ''

      return
    }

    this.todos.push({ name: this.todo, isChecked: false })

    this.todo = ''
  }

  onDeleteTodo(index: number){
    this.todos.splice(index, 1)
  }

  onEditTodo(index: number){
    this.editing = {
      is: true,
      index
    }

    this.todo = this.todos[index].name
  }
}
