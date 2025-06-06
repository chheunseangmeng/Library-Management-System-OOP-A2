// main.ts

import { Member } from "./models/Member";
import { BorrowedBook } from "./models/BorrowedBook";
import { BookFormat } from "./models/enum/BookFormat";
import { Book } from "./models/Book";
import { Review } from "./models/Review";
import { Reservation } from "./models/Reservation";
import { Library } from "./models/Library";
import { BookSearch } from "./services/BookSearch";
import { Category } from "./models/Category";
import { CategoryType } from "./models/enum/CategoryType";


// Define a concrete subclass for Book
class FictionBook extends Book {
  constructor(
    title: string,
    author: string,
    bookId: string,
    category: string,
    publicationYear: number,
    isbn: string,
    format: BookFormat[],
    availableCopies: number,
    location: string,
    reviews: Review[] = []
  ) {
    super(title, author, bookId, category, publicationYear, isbn, format, availableCopies, location, reviews);
  }
}

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
console.log("");
console.log("📚 1. Borrowed Books and Due Dates:");
console.log("");

// Get all borrowed books for this member
const borrowedBooks = library.getBorrowedBooksByMember(member.memberId);

borrowedBooks.forEach(borrow => {
  const book = library.getBookById(borrow.bookId);
  const memberInfo = member.getMemberInfo(); // Or use library.getMemberById(borrow.memberId)?.getMemberInfo()

  console.log(`\n📖 Book ID: ${borrow.bookId}, Due Date: ${borrow.dueDate.toDateString()}`);
  console.log(memberInfo);
});
console.log("=======================================");

// 2. Member returns a book and sees if fines apply
console.log("🔁 2. Returning Book and Fine Calculation:");

const returnDate = new Date("2025-06-20");
borrowedBook.returnBook(returnDate);

// Get book and member info
const returnedBook = library.getBookById(borrowedBook.bookId);
const borrower = library.getMemberById(borrowedBook.memberId);

console.log(`📕 Book Returned: ${returnedBook?.title} (ID: ${borrowedBook.bookId})`);
console.log(`📅 Due Date: ${borrowedBook.dueDate.toDateString()}`);
console.log(`📅 Returned On: ${borrowedBook.returnDate.toDateString()}`);
console.log(`💰 Fine Applied: $${borrowedBook.fine}`);
console.log(borrower?.getMemberInfo());


// 3. Librarian sees available copies
console.log("\n3. Available copies:");
console.log(`Book '${book1.title}' available copies: ${library.getAvailableCopies(book1.bookId)}`);

// 4. Member reserves a book
console.log("\n4. Reserving a book:");
const reservation = new Reservation("r001", member.memberId, book1.bookId, new Date(), "Please notify me when the book is available.");
library.reserveBook(member.memberId, book1.bookId, reservation);
console.log(`Reservation created for ${book1.title}`);

console.log("\n");
console.log("⭐ 5. Adding a Review:");
console.log("");

const review = new Review(
  "rev001",
  member.memberId,
  book1.bookId,
  5,
  "Loved the classic story!"
);

library.addReview(review);

// Get the reviewer object
const reviewer = library.getMemberById(review.memberId);

console.log(`📝 Review added for '${book1.title}' by:\n${reviewer?.getMemberInfo()}`);
console.log(`💬 "${review.comment}" - Rated: ${review.rating}/5`);


// Display average rating of the book
console.log(`Average rating for '${book1.title}': ${book1.getAverageRating()}`);



const bookSearch = new BookSearch(library.getAllBooks());

console.log("\n🔎 Search Results:");
const foundBooks = bookSearch.searchByTitle("gatsby");

foundBooks.forEach(book => {
  console.log(`📘 Title: ${book.title}, Author: ${book.author}`);
});


console.log("\n📂 7. Filter Books by Category 'Classic':");
const classics = bookSearch.filterByCategory("Classic");
classics.forEach(book => console.log(`- ${book.title}`));

console.log("\n📗 8. Available Books:");
const availableBooks = bookSearch.filterByAvailability();
availableBooks.forEach(book => console.log(`- ${book.title} (${book.availableCopies} copies)`));
