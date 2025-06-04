import { Book } from "./Book";
import { BookFormat } from "./enum/BookFormat";
import { Review } from "./Review";

/**
 * Represents a fiction book, extending the base Book class
 */
export class FictionBook extends Book {
  /**
   * Creates a new FictionBook instance
   * @param title the title of the book
   * @param author the author of the book
   * @param bookId the unique identifier for the book
   * @param category the category or genre of the book
   * @param publicationYear the year the book was published
   * @param isbn the ISBN number of the book
   * @param format the available formats of the book
   * @param availableCopies the number of available copies
   * @param location the location where the book is stored
   * @param reviews the array of reviews for the book
   */
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