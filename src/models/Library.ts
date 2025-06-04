import { Book } from "./Book";
import { Member } from "./Member";
import { BorrowedBook } from "./BorrowedBook";
import { Reservation } from "./Reservation";
import { Review } from "./Review";
import { Librarian } from "./Librarian";

/**
 * Manages the library's collection of books, members, borrowed books, reservations, reviews, and librarians
 */
export class Library {
   
  private books: Book[];
  private members: Member[];
  private borrowedBooks: BorrowedBook[];
  private reservations: Reservation[];
  private reviews: Review[];
  private librarians: Librarian[];
    memberId: any;

  /**
   * Creates a new Library instance
   */
  constructor() {
    this.books = [];
    this.members = [];
    this.borrowedBooks = [];
    this.reservations = [];
    this.reviews = [];
    this.librarians = [];
  }

  /**
   * Adds a new member to the library
   * @param member the member object to add
   * @returns the added member
   */
  addMember(member: Member): Member {
    this.members.push(member);
    return member;
  }

  addBorrowedBook(borrowed: BorrowedBook): void {
  this.borrowedBooks.push(borrowed);
}


  /**
   * Adds a new book to the library
   * @param book the book object to add
   * @returns the added book
   */
  addBook(book: Book): Book {
    this.books.push(book);
    return book;
  }

  /**
   * Removes a book from the library by bookId
   * @param bookId the unique identifier of the book to remove
   * @returns the number of books removed
   */
  removeBook(bookId: string): number {
    const initialLength = this.books.length;
    this.books = this.books.filter(book => book.bookId !== bookId);
    return initialLength - this.books.length; // Returns number of books removed
  }

  /**
   * Allows a member to reserve a book
   * @param reservation the reservation object to add
   * @throws {Error} if the reservation is invalid
   */
  reserveBook(memberId: string, bookId: string, reservation: Reservation): void {
    if (!reservation) {
      throw new Error("Invalid reservation");
    }
    this.reservations.push(reservation);
  }

  /**
   * Adds a review for a book
   * @param review the review object to add
   * @throws {Error} if the review is invalid
   */
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

  /**
   * Gets all books borrowed by a specific member
   * @param memberId the unique identifier of the member
   * @returns an array of borrowed books
   */
  getBorrowedBooksByMember(memberId: string): BorrowedBook[] {
  return this.borrowedBooks.filter(book => book.memberId === memberId);
}

  

  

  /**
   * Gets all borrowed books that are not yet returned
   * @returns an array of borrowed books not yet returned
   */
  notYetBorrowedBook(): BorrowedBook[] {
    return this.borrowedBooks.filter(borrow => !borrow.isReturned);
  }

  /**
   * Gets the number of available copies of a book
   * @param bookId the unique identifier of the book
   * @returns the number of available copies
   */
  getAvailableCopies(bookId: string): number {
    const book = this.books.find(b => b.bookId === bookId);
    return book ? book.getAvailableCopies() : 0;
  }
}