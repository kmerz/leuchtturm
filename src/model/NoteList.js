export default class NoteList {
  constructor(notes) {
    this._value = { notes };
  }

  get notes() {
    return this._value.notes;
  }

  toJson() {
    const objs = this._value.notes.map(x => x.toObject());
    return JSON.stringify(objs);
  }
}

class Builder {
  constructor() {
    this.value = {};
  }

  notes(notes) {
    this.value.notes = notes;
  }

  addNote(note) {
    const newNotes = this.value.notes.slice(0);
    newNotes.push(note);
    this.value.notes = newNotes;
    return this;
  }

  removeNote(note) {
    const newNotes = this.value.notes.slice(0);
    const index = newNotes.findIndex((n) => n.header === note.header);
    if (index > -1) {
      newNotes.splice(index, 1);
    }
    this.value.notes = newNotes;
    return this;
  }

  build() {
    return new NoteList(this.value.notes);
  }
}
