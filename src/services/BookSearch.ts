import { Book } from "../models/Book";

/**
 * Provides search and filter functionalities for a collection of books.
 */
export class BookSearch {
  private books: Book[]; // Collection of books to search/filter from

  /**
   * Constructs a new BookSearch instance.
   * @param books - Optional array of books to initialize the search utility.
   */
  constructor(books: Book[] = []) {
    this.books = books;
  }

  /**
   * Searches for books by their title.
   * @param title - The title or partial title to search for.
   * @returns Array of books with titles matching the given string.
   */
  public searchByTitle(title: string): Book[] {
    if (!title || title.trim() === '') {
      return [];
    }
    return this.books.filter(book =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  /**
   * Searches for books by their author's name.
   * @param author - The author or partial author name to search for.
   * @returns Array of books written by matching authors.
   */
  public searchByAuthor(author: string): Book[] {
    if (!author || author.trim() === '') {
      return [];
    }
    return this.books.filter(book =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  /**
   * Filters books by a specific category.
   * @param category - The category to filter by.
   * @returns Array of books that match the given category.
   */
  public filterByCategory(category: string): Book[] {
    if (!category || category.trim() === '') {
      return [];
    }
    return this.books.filter(book =>
      book.category.toLowerCase() === category.toLowerCase()
    );
  }

  /**
   * Filters books that are currently available (have more than 0 copies).
   * @returns Array of books that are available to borrow.
   */
  public filterByAvailability(): Book[] {
    return this.books.filter(book => book.availableCopies > 0);
  }
}
