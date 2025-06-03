import { Reservation } from "./Reservation";

/**
 * Represents a library member with personal details and reservation capabilities
 */
export class Member {
  memberId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  memberType: MemberType;

  /**
   * Creates a new Member instance
   * @param memberId the unique identifier for the member
   * @param fullName the full name of the member
   * @param email the email address of the member
   * @param phoneNumber the phone number of the member
   * @param address the address of the member
   * @param memberType the type of membership
   */
  constructor(
    memberId: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    address: string,
    memberType: MemberType
  ) {
    this.memberId = memberId;
    this.fullName = fullName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.memberType = memberType;
  }

  /**
   * Reserves a book for the member
   * @param book the book object to reserve
   * @returns the created reservation object
   * @throws {Error} if the book is not available or reservation limit is reached
   */
  reserveBook(book: Book): Reservation {
    if (!book.isAvailable) {
      throw new Error("The book is not available for reservation.");
    }

    const currentReservations = 0; 
    if (currentReservations >= this.memberType.maxReservations) {
      throw new Error("Maximum reservation limit reached for this member.");
    }

    const reservation = new Reservation(
      "RES" + Date.now(), 
      this.memberId,
      book.bookId,
      new Date(),
      "Book reserved"
    );

    book.isAvailable = false;
    return reservation;
  }
}

/**
 * Defines the type of membership with associated limits
 */
export interface MemberType {
  typeId: string;
  typeName: string;
  maxReservations: number;
  loanPeriodDays: number;
}

/**
 * Defines the structure of a book
 */
interface Book {
  bookId: string;
  title: string;
  author: string;
  isbn: string;
  isAvailable: boolean;
}