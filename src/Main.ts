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
import { FictionBook } from "./models/FictionBook";
import { Notification } from "./models/Notification";
import { Payment } from "./models/Payment";

// Create member
const member = new Member(
  "m001",
  "Yen Yon",
  "yenyon@gmail.com",
  "0123456789",
  "BP 511 St. 371 Phum Tropeang Chhuk (Borey Sorla)",
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

// Add borrowed book to library
library.addBorrowedBook(borrowedBook);

// Create and send notification for borrowing
const borrowNotification = new Notification(
  "notif001",
  member.memberId,
  `You have successfully borrowed "${book1.title}". Please return by ${borrowedBook.dueDate.toDateString()}.`,
  new Date(),
  false
);
console.log("\n📬 New Notification:");
console.log(`📅 ${borrowNotification.getSummary()}`);

// 1. Member views borrowed books and due dates
console.log("==================================");
console.log("📚 1. Borrowed Books and Due Dates:");
console.log("");

const borrowedBooks = library.getBorrowedBooksByMember(member.memberId);

borrowedBooks.forEach(borrow => {
  const book = library.getBookById(borrow.bookId);
  console.log(`📖 Book ID: ${borrow.bookId}, Due Date: ${borrow.dueDate.toDateString()}`);
  console.log(member.getMemberInfo());
});
console.log("==================================");

// 2. Member returns a book and sees if fines apply
console.log("==================================");
console.log("🔁 2. Returning Book and Fine Calculation:");

const returnDate = new Date("2025-06-20");
borrowedBook.returnBook(returnDate);

const returnedBook = library.getBookById(borrowedBook.bookId);

console.log(`📕 Book Returned: ${returnedBook?.title} (ID: ${borrowedBook.bookId})`);
console.log(`📅 Due Date: ${borrowedBook.dueDate.toDateString()}`);
console.log(`📅 Returned On: ${borrowedBook.returnDate.toDateString()}`);
console.log(`💰 Fine Applied: $${borrowedBook.fine}`);

// Process payment if there is a fine
if (borrowedBook.fine > 0) {
  const payment = new Payment(
    "pay001",
    member.memberId,
    borrowedBook.fine,
    new Date(),
    "QR code"
  );
  console.log("\n💳 Processing Fine Payment:");
  const paymentSuccess = payment.processPayment("QR code");
  
  if (paymentSuccess) {
    console.log("\n💵 Payment Details:");
    console.log(`- Payment ID: ${payment.paymentId}`);
    console.log(`- Member ID: ${payment.memberId}`);
    // console.log(`- Member Name: ${member.memberName}`);
    console.log(`- Number of Books: ${borrowedBooks.length}`);
    console.log(`- Book Name: ${returnedBook?.title}`);
    console.log(`- Total Price: $${payment.amount}`);
    console.log(`- Pay By: ${payment.method}`);
    
    const paymentNotification = new Notification(
      "notif003",
      member.memberId,
      `Payment of $${borrowedBook.fine} for late return of "${book1.title}" processed successfully via ${payment.method}.`,
      new Date(),
      false
    );
    console.log("\n📬 Payment Confirmation Notification:");
    console.log(`📅 ${paymentNotification.getSummary()}`);
  } else {
    console.log(`Payment failed for fine of $${borrowedBook.fine}`);
  }
}
console.log("==================================");

// Mark borrow notification as read
console.log("==================================");
console.log("📬 Notification Status:");
borrowNotification.markAsRead();
console.log(`Notification for borrowing '${book1.title}' read: ${borrowNotification.isRead}`);
console.log("==================================");

// 3. Librarian sees available copies
console.log("==================================");
console.log("3. Available copies:");
console.log(`Book '${book1.title}' available copies: ${library.getAvailableCopies(book1.bookId)}`);
console.log("==================================");

// 4. Member reserves a book
console.log("==================================");
console.log("4. Reserving a book:");
const reservation = new Reservation("r001", member.memberId, book1.bookId, new Date(), "Please notify me when the book is available.");
library.reserveBook(member.memberId, book1.bookId, reservation);
console.log(`Reservation created for ${book1.title}`);

const reservationNotification = new Notification(
  "notif002",
  member.memberId,
  `Your reservation for "${book1.title}" has been confirmed.`,
  new Date(),
  false
);
console.log("\n📬 New Notification:");
console.log(`📅 ${reservationNotification.getSummary()}`);
console.log("==================================");

// 5. Adding a review
console.log("==================================");
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

const reviewer = library.getMemberById(review.memberId);

console.log(`📝 Review added for '${book1.title}' by:\n${reviewer?.getMemberInfo()}`);
console.log(`💬 "${review.comment}" - Rated: ${review.rating}/5`);
console.log(`Average rating for '${book1.title}': ${book1.getAverageRating()}`);
console.log("==================================");

// 6. Search results
console.log("==================================");
console.log("🔎 6. Search Results:");
const bookSearch = new BookSearch(library.getAllBooks());
const foundBooks = bookSearch.searchByTitle("gatsby");

foundBooks.forEach(book => {
  console.log(`📘 Title: ${book.title}, Author: ${book.author}`);
});
console.log("==================================");

// 7. Filter books by category
console.log("==================================");
console.log("📂 7. Filter Books by Category 'Classic':");
const classics = bookSearch.filterByCategory("Classic");
classics.forEach(book => console.log(`- ${book.title}`));
console.log("==================================");

// 8. Available books
console.log("==================================");
console.log("📗 8. Available Books:");
const availableBooks = bookSearch.filterByAvailability();
availableBooks.forEach(book => console.log(`- ${book.title} (${book.availableCopies} copies)`));
console.log("==================================");