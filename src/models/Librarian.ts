import { Book } from "./Book";

/**
 * Represents a librarian who manages books in the library system.
 */
export class Librarian {
  public book: Book[] = []; // Collection of books managed by the librarian
  public librarian: string; // Unique ID of the librarian
  public name: string; // Full name of the librarian
  public email: string; // Email address of the librarian

  /**
   * Constructs a new Librarian instance.
   * @param librarian - Unique identifier for the librarian.
   * @param name - Full name of the librarian.
   * @param email - Email address of the librarian.
   */
  constructor(librarian: string, name: string, email: string) {
    this.librarian = librarian;
    this.name = name;
    this.email = email;
  }

  /**
   * Registers a new book to the library's collection.
   * @param book - The book to be added.
   */
  registerBook(book: Book): void {
    // Method body can be implemented to add the book to this.book[]
  }
}
