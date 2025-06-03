import { BookFormat } from "./enum/BookFormat";
import { Review } from "./Review";

/**
 * Represents a book with its details and review system
 */
export abstract class Book {
    bookId: string;
    title: string;
    author: string;
    category: string;
    publicationYear: number;
    isbn: string;
    format: BookFormat[];
    availableCopies: number;
    location: string;
    reviews: Review[];

    /**
     * Creates a new Book instance
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
    constructor(title: string, author: string, bookId: string, category: string, publicationYear: number, isbn: string, 
                format: BookFormat[] = [], availableCopies: number, location: string, reviews: Review[] = []) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.category = category;
        this.publicationYear = publicationYear;
        this.isbn = isbn;
        this.format = format;
        this.availableCopies = availableCopies;
        this.location = location;
        this.reviews = reviews;
    }

    /**
     * Gets the number of available copies of the book
     * @returns the number of available copies
     */
    getAvailableCopies(): number {
        return this.availableCopies;
    }

    /**
     * Adds a review to the book if it meets the criteria
     * @param review the review object to add
     * @returns the added review or undefined if invalid
     */
    addReview(review: Review): Review | undefined {
        if (review && review.rating && review.comment && review.memberId && review.bookId) {
            this.reviews.push(review);
            return review;
        }
        return undefined;
    }

    /**
     * Calculates the average rating of the book based on reviews
     * @returns the average rating or null if no reviews exist
     */
    getAverageRating(): number | null {
        if (this.reviews.length === 0) {
            return null;
        }
        const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);
        return parseFloat((total / this.reviews.length).toFixed(2));
    }
}