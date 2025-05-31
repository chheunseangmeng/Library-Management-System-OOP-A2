export class Reservation {
  constructor(
    public reservationId: string,
    public memberId: string,
    public bookId: string,
    public reservationDate: Date,
    public commentText: string
  ) {}

 isExpired(): boolean {
    const currentDate = new Date(); 
    const expirationPeriod = 7 * 24 * 60 * 60 * 1000; 
    const timeDifference = currentDate.getTime() - this.reservationDate.getTime();
    return timeDifference > expirationPeriod;
  }
  notifyMember(): string {
    return `Dear Member (ID: ${this.memberId}), your reservation (ID: ${this.reservationId}) for Book (ID: ${this.bookId}) has been confirmed on ${this.reservationDate.toDateString()}. Comment: ${this.commentText}`;
  }
}
