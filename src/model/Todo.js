import uuid from 'uuid/v4';

export default class Todo {
  constructor(task, due, id = uuid(), done = false) {
    this._value = { id, task, due, done };
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

  get id() {
    return this._value.id;
  }

  toBuilder() {
    const { task, due, done, id } = this._value;
    return new Builder()
      .id(id)
      .task(task)
      .due(due)
      .done(done);
  }

  toObject() {
    return this._value;
  }

  static builder() {
    return new Builder()
      .id(uuid())
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

  id(id) {
    this.value.id = id;
    return this;
  }

  build() {
    const { id, task, due, done } = this.value;
    return new Todo(task, due, id, done);
  }
}
