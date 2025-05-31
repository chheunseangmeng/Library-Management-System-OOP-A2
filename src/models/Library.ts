import { Book } from "./Book";
import { Member } from "./Member";
import { BorrowedBook } from "./BorrowedBook";
import { Reservation } from "./Reservation";
import { Review } from "./Review";
import { Librarian } from "./Librarian";

export class Library {
  private books: Book[];
  private members: Member[];
  private borrowedBooks: BorrowedBook[];
  private reservations: Reservation[];
  private reviews: Review[];
  private librarians: Librarian[];

  constructor() {
    this.books = [];
    this.members = [];
    this.borrowedBooks = [];
    this.reservations = [];
    this.reviews = [];
    this.librarians = [];
  }

  // Add a new member to the library
  addMember(member: Member): Member {
    this.members.push(member);
    return member;
  }

  // Add a new book to the library
  addBook(book: Book): Book {
    this.books.push(book);
    return book;
  }

  // Remove a book from the library by bookId
  removeBook(bookId: string): number {
    const initialLength = this.books.length;
    this.books = this.books.filter(book => book.bookId !== bookId);
    return initialLength - this.books.length; // Returns number of books removed
  }

  // Allow a member to reserve a book
  reserveBook(reservation: Reservation): void {
    if (!reservation) {
      throw new Error("Invalid reservation");
    }
    this.reservations.push(reservation);
  }

  // Add a review for a book
  addReview(review: Review): void {
    if (!review) {
      throw new Error("Invalid review");
    }
    this.reviews.push(review);
    const book = this.books.find(b => b.bookId === review.bookId);
    if (book) {
      book.addReview(review);
    }
  }

  // Get all books borrowed by a specific member
  getBooksByMember(memberId: string): BorrowedBook[] {
    return this.borrowedBooks.filter(borrow => borrow.memberId === memberId && !borrow.isReturned);
  }

  // Get all borrowed books that are not yet returned
  notYetBorrowedBook(): BorrowedBook[] {
    return this.borrowedBooks.filter(borrow => !borrow.isReturned);
  }

  // Get the number of available copies of a book
  getAvailableCopies(bookId: string): number {
    const book = this.books.find(b => b.bookId === bookId);
    return book ? book.getAvailableCopies() : 0;
  }
}