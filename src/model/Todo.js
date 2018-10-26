class Todo {
  constructor(task, due) {
    this._value = { task, due };
  }

  get task() {
    return this._value.task;
  }

  get due() {
    return this._value.due;
  }

  toBuilder() {
    const { task, due } = this._value;
    return new Builder()
      .task(task)
      .due(due);
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  constructor() {
    this.value = {};
  }

  task(task) {
    this.value.task = task;
    return this;
  }

  due(due) {
    this.value.due = due;
    return this;
  }

  build() {
    const { task, due } = this.value;
    return new Todo(task, due);
  }
}

export default Todo;
