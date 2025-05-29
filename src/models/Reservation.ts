export class Reservation {
  reservationId: string;
  memberId: string;
  bookId: string;
  reservationDate: Date;
  comment: string;

  constructor(
    reservationId: string,
    memberId: string,
    bookId: string,
    reservationDate: Date,
    comment: string
  ) {
    this.reservationId = reservationId;
    this.memberId = memberId;
    this.bookId = bookId;
    this.reservationDate = reservationDate;
    this.comment = comment;
  }

  // Generic method that takes a type parameter and returns the same type
  method<T>(type: T): T {
    return type;
  }
}
