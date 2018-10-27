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

  get today() {
    const now = new Date();
    return this._value.todos.filter(
      todo => this.daysBetween(now, todo.due) === 0
    );
  }

  get tomorrow() {
    const now = new Date();
    return this._value.todos.filter(
      todo => this.daysBetween(now, todo.due) === 1
    );
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
    this.value.task = todos;
    return this;
  }

  build() {
    const { todos } = this.value;
    return new TodoList(todos);
  }
}

export default TodoList;
