import uuid from 'uuid/v4';

export default class Note {
  constructor(header, note, id = uuid()) {
    this._value = { header, note, id};
  }

  get header() {
    return this._value.header;
  }

  get note() {
    return this._value.note;
  }

  get id() {
    return this._value.id;
  }

  toBuilder () {
    const { header, note, id} = this._value;
    return new Builder()
      .id(id)
      .note(note)
      .header(header);
  }

  static builder() {
    return new Builder()
      .id(uuid());
  }

  toObject() {
    return this._value;
  }
}

class Builder {
  constructor() {
    this.value = {};
  }

  header(header) {
    this.value.header = header;
    return this;
  }

  note(note) {
    this.value.note = note;
    return this;
  }

  id(id) {
    this.value.id = id;
    return this;
  }

  build() {
    const { header, note, id } = this.value;
    return new Note(header, note, id);
  }
}
