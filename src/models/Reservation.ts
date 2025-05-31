export class Reservation {
  isExpired() {
    throw new Error('Method not implemented.');
  }
  isActive!: boolean;
  constructor(
    public reservationId: string,
    public memberId: string,
    public bookId: string,
    public reservationDate: Date,
    public commentText: string
  ) {}

 
}
