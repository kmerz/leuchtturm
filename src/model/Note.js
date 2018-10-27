export default class Note {
  constructor(header, note) {
    this._value = { header, note };
  }

  get header() {
    return this._value.header;
  }

  get note() {
    return this._value.note;
  }

  toBuilder () {
    const { header, note } = this._value;
    return new Builder()
      .note(note)
      .header(header);
  }

  static builder() {
    return new Builder();
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

  build() {
    const { header, note } = this.value;
    return new Note(header, note);
  }
}
