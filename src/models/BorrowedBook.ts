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
}

  