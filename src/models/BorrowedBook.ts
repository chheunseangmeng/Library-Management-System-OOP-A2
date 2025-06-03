export class BorrowedBook {
  borrowId: string;
  memberId: string;
  bookId: string;
  borrowDate: Date;
  dueDate: Date;
  returnDate: Date;
  fine: number;
  books: any;
  isReturned: any;
   
    
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

   calculateFine(): void {
    const msPerDay = 1000 * 60 * 60 * 24;
    const overdueMs = this.returnDate.getTime() - this.dueDate.getTime();
    const overdueDays = Math.ceil(overdueMs / msPerDay);
    this.fine = overdueDays > 0 ? overdueDays * 1 : 0;
  }
  
}

  