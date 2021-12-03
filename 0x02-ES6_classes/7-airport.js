export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    } else { throw new TypeError('Name must be string'); }
    if (typeof code === 'string') {
      this._code = code;
    } else { throw new TypeError('Code must be string'); }
  }

  toString() {
    return `${this.code}`;
  }
}
