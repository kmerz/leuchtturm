class Todo {
  constructor(task, due, done = false) {
    this._value = { task, due, done };
  }

  get task() {
    return this._value.task;
  }

  get due() {
    return this._value.due;
  }

  get done() {
    return this._value.done;
  }

  toBuilder() {
    const { task, due, done } = this._value;
    return new Builder()
      .task(task)
      .due(due)
      .done(done);
  }

  static builder() {
    return new Builder()
      .done(false);
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

  done(done) {
    this.value.done = done;
    return this;
  }

  build() {
    const { task, due, done } = this.value;
    return new Todo(task, due, done);
  }
}

export default Todo;
