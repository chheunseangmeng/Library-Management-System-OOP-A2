import { Book } from "../models/Book";

export class BookSearch {
    private books: Book[];

    constructor(books: Book[] = []) {
        this.books = books;
    }

    // Method: searchByTitle
    public searchByTitle(title: string): Book[] {
        if (!title || title.trim() === '') {
            return [];
        }
        return this.books.filter(book =>
            book.title.toLowerCase().includes(title.toLowerCase())
        );
    }

    // Method: searchByAuthor
    public searchByAuthor(author: string): Book[] {
        if (!author || author.trim() === '') {
            return [];
        }
        return this.books.filter(book =>
            book.author.toLowerCase().includes(author.toLowerCase())
        );
    }

    // Method: filterByCategory
    public filterByCategory(category: string): Book[] {
        if (!category || category.trim() === '') {
            return [];
        }
        return this.books.filter(book =>
            book.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Method: filterByAvailability
    public filterByAvailability(): Book[] {
        return this.books.filter(book => book.availableCopies > 0);
    }
}