import { Book } from "./Book";
import { BookFormat } from "./enum/BookFormat";
import { Review } from "./Review";

export class FictionBook extends Book {
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
