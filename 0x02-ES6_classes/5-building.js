/* eslint class-methods-use-this: ["error", { "exceptMethods": ["evacuationWarningMessage"] }] */
export default class Building {
  constructor(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else { throw new TypeError('sqft must to number'); }

    const proto = Object.getPrototypeOf(this);
    const name = 'evacuationWarningMessage';
    const missing = !Object.prototype.hasOwnProperty.call(proto, name);
    if (missing) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft === 'number') {
      this._sqft = sqft;
    } else { throw new TypeError('sqft must to number'); }
  }

  evacuationWarningMessage() {}
}
