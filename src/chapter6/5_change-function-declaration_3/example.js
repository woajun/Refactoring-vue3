export default class Book {
  _reservations = [];

  addReservation(customer) {
    this._reservations.push(customer);
  }
}
