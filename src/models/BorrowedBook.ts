import { Member } from "./Member";

export class BorrowedBook {
  
  // Unique identifier for the borrow transaction
  borrowId: string;
  // Identifier for the member who borrowed the book
  memberId: string;
  // Identifier for the borrowed book
  bookId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate: Date;
  // Fine amount for late return
  fine: number;
  books: any;
  isReturned: any;
   
  // Constructor to initialize a BorrowedBook instance
  constructor(
    borrowId: string,
    memberId: string,
    bookId: string,
    borrowDate: Date,
    dueDate: Date,
    returnDate: Date,
    fine: number
  ) {
    this.borrowId = borrowId;
    this.memberId = memberId;
    this.bookId = bookId;
    this.borrowDate = borrowDate;
    this.dueDate = dueDate;
    this.returnDate = returnDate;
    this.fine = fine;
  }

  // Method to calculate fine based on overdue days
  calculateFine(): void {
    const msPerDay = 1000 * 60 * 60 * 24;
    // Calculate overdue time in milliseconds
    const overdueMs = this.returnDate.getTime() - this.dueDate.getTime();
    // Convert overdue time to days, rounding up
    const overdueDays = Math.ceil(overdueMs / msPerDay);
    // Set fine to $1 per overdue day, or 0 if not overdue
    this.fine = overdueDays > 0 ? overdueDays * 1 : 0;
  }

  
  getMemberName(): string {
    return this.memberId;
  }

  returnBook(dateReturned: Date): void {
    this.returnDate = dateReturned;
    this.isReturned = true;
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLate = Math.floor(
      (dateReturned.getTime() - this.dueDate.getTime()) / msPerDay
    );
    if (daysLate > 0) {
      this.fine = daysLate * 1; // Example: $1 per day late
    }
  }


}