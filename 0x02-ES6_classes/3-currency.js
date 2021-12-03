export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    } else { throw new TypeError('Code must be string'); }
    if (typeof name === 'string') {
      this._name = name;
    } else { throw new TypeError('Name must be string'); }
  }

  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    } else { throw new TypeError('Code must be string'); }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else { throw new TypeError('Name must be string'); }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
