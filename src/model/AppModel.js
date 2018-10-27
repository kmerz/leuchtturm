import NoteList from './NoteList';
import TodoList from './TodoList';

export default class AppModel {
  constructor(todos, notes) {
    this._value = { todos, notes };
  }

  get todos() {
    return this._value.todos;
  }

  get notes() {
    return this._value.notes;
  }

  toBuilder() {
    return new Builder()
      .todos(this._value.todos)
      .notes(this._value.notes);
  }

  static builder() {
    const todos = new TodoList([]);
    const notes = new NotesList([]);
    return new Builder()
      .todos(todos)
      .notes(notes);
  }

  toJson() {
    const notes = this._value.notes.toObject();
    const todos = this._value.todos.toObject();
    const jsonObj = { todos, notes};
    const json = JSON.stringify(jsonObj, null, 2);
    return json;
  }

  static fromJson(content) {
    const obj = JSON.parse(content);
    const notes = NoteList.fromJson(obj.notes);
    const todos = TodoList.fromJson(obj.todos);
    return new AppModel(todos, notes);
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

  notes(notes) {
    this.value.notes = notes;
    return this;
  }

  build() {
    const { todos, notes } = this.value;
    return new AppModel(todos, notes);
  }
}
