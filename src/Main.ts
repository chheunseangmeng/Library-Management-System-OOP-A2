// main.ts

import { Member } from "./models/Member";
import { BorrowedBook } from "./models/BorrowedBook";
import { BookFormat } from "./models/enum/BookFormat";
import { Book } from "./models/Book";
import { Review } from "./models/Review";
import { Reservation } from "./models/Reservation";
import { Library } from "./models/Library";
import { FictionBook } from "./models/FictionBook";

// Create member
const member = new Member(
  "m001",
  "Alice Johnson",
  "alice@example.com",
  "0123456789",
  "123 Maple St",
  {
    typeId: "t1",
    typeName: "Regular",
    maxReservations: 5,
    loanPeriodDays: 14
  }
);

// Create book
const book1 = new FictionBook(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "b001",
  "Classic",
  1925,
  "9780743273565",
  [BookFormat.DIGITAL],
  2,
  "Shelf A3"
);

// Create library
const library = new Library();

// Add member and book to the library
library.addMember(member);
library.addBook(book1);

// Member borrows a book
const borrowedBook = new BorrowedBook(
  "br001",
  member.memberId,
  book1.bookId,
  new Date("2025-06-01"),
  new Date("2025-06-15"),
  new Date("2025-06-15"),
  0
);

// You need this method in Library class:
library.addBorrowedBook(borrowedBook);

// 1. Member views borrowed books and due dates
console.log("1. Borrowed books and due dates:");
const borrowedBooks = library.getBorrowedBooksByMember(member.memberId);
borrowedBooks.forEach(b => {
  console.log(`- Book ID: ${b.bookId}, Due Date: ${b.dueDate.toDateString()}`);
});

// 2. Member returns a book and sees if fines apply
console.log("\n2. Returning book and fine calculation:");
borrowedBook.returnBook(new Date("2025-06-20")); // returned late
console.log(`Returned book ${borrowedBook.bookId}, Fine: $${borrowedBook.fine}`);

// 3. Librarian sees available copies
console.log("\n3. Available copies:");
console.log(`Book '${book1.title}' available copies: ${library.getAvailableCopies(book1.bookId)}`);

// 4. Member reserves a book
console.log("\n4. Reserving a book:");
const reservation = new Reservation("r001", member.memberId, book1.bookId, new Date(), "Please notify me when the book is available.");
library.reserveBook(member.memberId, book1.bookId, reservation);
console.log(`Reservation created for ${book1.title}`);

// 5. Member reviews a book they've read
console.log("\n5. Adding a review:");
const review = new Review("rev001", member.memberId, book1.bookId, 5, "Loved the classic story!");
library.addReview(review);
console.log(`Review added for ${book1.title}`);

// Display average rating of the book
console.log(`Average rating for '${book1.title}': ${book1.getAverageRating()}`);
