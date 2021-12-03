/* eslint-disable no-unused-vars */
import Currency from './3-currency';
/* eslint-enable no-unused-vars */

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else { throw new TypeError('Amount must be number'); }
    if (typeof currency === 'object') {
      this._currency = currency;
    } else { throw new TypeError('Currency must be a type of Currency'); }
  }

  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    } else { throw new TypeError('Amount must be number'); }
  }

  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (typeof currency === 'object') {
      this._currency = currency;
    } else { throw new TypeError('Currency must be a type of Currency'); }
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount === 'number' && typeof conversionRate === 'number') {
      return amount * conversionRate;
    }
    throw new TypeError('Amount and Conversion Rate must be numbers');
  }
}
