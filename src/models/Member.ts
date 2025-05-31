import { Reservation } from "./Reservation";

export class Member {
  memberId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  memberType: MemberType;


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

export interface MemberType {
  typeId: string;
  typeName: string;
  maxReservations: number;
  loanPeriodDays: number;
}

interface Book {
  bookId: string;
  title: string;
  author: string;
  isbn: string;
  isAvailable: boolean;
}