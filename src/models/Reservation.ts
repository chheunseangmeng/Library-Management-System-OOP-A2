/**
 * Represents a reservation of a book made by a member.
 */
export class Reservation {
  /**
   * Constructs a new Reservation instance.
   * @param reservationId - Unique ID for the reservation.
   * @param memberId - ID of the member who made the reservation.
   * @param bookId - ID of the reserved book.
   * @param reservationDate - The date when the reservation was made.
   * @param commentText - Optional comment or note regarding the reservation.
   */
  constructor(
    public reservationId: string,
    public memberId: string,
    public bookId: string,
    public reservationDate: Date,
    public commentText: string
  ) {}

  /**
   * Checks whether the reservation has expired.
   * A reservation is considered expired if it's older than 7 days.
   * @returns True if the reservation is expired; false otherwise.
   */
  isExpired(): boolean {
    const currentDate = new Date(); 
    const expirationPeriod = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    const timeDifference = currentDate.getTime() - this.reservationDate.getTime();
    return timeDifference > expirationPeriod;
  }

  /**
   * Sends a notification message to the member about their reservation.
   * @returns A formatted message confirming the reservation.
   */
  notifyMember(): string {
    return `Dear Member (ID: ${this.memberId}), your reservation (ID: ${this.reservationId}) for Book (ID: ${this.bookId}) has been confirmed on ${this.reservationDate.toDateString()}. Comment: ${this.commentText}`;
  }
}
