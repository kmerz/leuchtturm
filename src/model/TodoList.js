import Todo from './Todo';

class TodoList {
  constructor(todos) {
    this._value = { todos };
  }

  get todos() {
    return this._value.todos;
  }

  daysBetween(first, second) {
    const one = new Date(first.getFullYear(), first.getMonth(),
                         first.getDate());
    const two = new Date(second.getFullYear(), second.getMonth(),
                         second.getDate());
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const millisBetween = two.getTime() - one.getTime();
    const days = millisBetween / millisecondsPerDay;

    return Math.floor(days);
  }

  sort(a, b) {
    if (a.done > b.done) {
      return 1;
    }
    if (a.done < b.done) {
      return -1;
    }
    return 0;
  }

  get today() {
    const now = new Date();
    return this._value.todos.filter(
      todo => this.daysBetween(now, todo.due) === 0
    ).sort(this.sort);
  }

  get tomorrow() {
    const now = new Date();
    return this._value.todos.filter(
      todo => this.daysBetween(now, todo.due) === 1
    ).sort(this.sort);
  }

  get upcoming() {
    const now = new Date();
    return this._value.todos.filter(
      todo => {
        const daysBetween = this.daysBetween(now, todo.due);
        return daysBetween > 1;
      }
    ).sort(this.sort);
  }

  toJson() {
    const objs = this._value.todos.map(x => x.toObject());
    return JSON.stringify(objs);
  }

  static fromJson(json) {
    const objs = JSON.parse(json);
    const todos = objs.map(x => {
      const {task, due, done} = x;
      const date = new Date(due);
      return new Todo(task, date, done);
    });
    return new TodoList(todos);
  }

  toBuilder() {
    const { todos } = this._value;
    return new Builder()
      .todos(todos);
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  constructor() {
    this.value = {};
  }

  todos(todos) {
    this.value.todos = todos;
    return this;
  }

  addTodo(todo) {
    const newTodos = this.value.todos.slice(0);
    newTodos.push(todo);
    this.value.todos = newTodos;
    return this;
  }

  removeTodo(todo) {
    const newTodos = this.value.todos.slice(0);
    const todoIndex = newTodos.findIndex((t) => t.task === todo.task);
    if (todoIndex > -1) {
      newTodos.splice(todoIndex, 1);
    }
    this.value.todos = newTodos;
    return this;
  }

  build() {
    const { todos } = this.value;
    return new TodoList(todos);
  }
}

export default TodoList;
