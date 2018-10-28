import Note from './Note';

export default class NoteList {
  constructor(notes) {
    this._value = { notes };
  }

  get notes() {
    return this._value.notes.sort((a, b) => {
      if(a.header > b.header) {
        return 1;
      }
      if (a.header < b.header) {
        return -1;
      }
      return 0;
    });
  }

  toObject() {
    return this._value.notes.map(x => x.toObject());
  }

  static fromJson(objs) {
    const notes = objs.map(x => {
      const { header, note, id } = x;
      return new Note(header, note, id);
    });
    return new NoteList(notes);
  }

  toBuilder() {
    return new Builder()
      .notes(this._value.notes);
  }

  static builder() {
    return new Builder();
  }
}

class Builder {
  constructor() {
    this.value = {};
  }

  notes(notes) {
    this.value.notes = notes;
    return this;
  }

  addNote(note) {
    const newNotes = this.value.notes.slice(0);
    newNotes.push(note);
    this.value.notes = newNotes;
    return this;
  }

  removeNote(note) {
    const newNotes = this.value.notes.slice(0);
    const index = newNotes.findIndex((n) => n.id === note.id);
    if (index > -1) {
      newNotes.splice(index, 1);
    }
    this.value.notes = newNotes;
    return this;
  }

  updateNote(note) {
    const newNotes = this.value.notes.slice(0);
    const index = newNotes.findIndex((n) => n.id === note.id);
    if (index > -1) {
      newNotes.splice(index, 1);
      newNotes.splice(index, 0, note);
    }
    this.value.notes = newNotes;
    return this;
  }

  build() {
    return new NoteList(this.value.notes);
  }
}
