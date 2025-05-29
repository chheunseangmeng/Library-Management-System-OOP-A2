import { BookFormat } from "./enum/BookFormat";
import { Review } from "./Review";

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

    constructor(title: string, author: string,bookId: string, category: string,publicantionYear:number,isbn: string, 
    format: BookFormat[], availableCopies: number,location: string,reviews: Review[]) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.category = category;
        this.publicationYear = publicantionYear;
        this.isbn = isbn;
        this.format = [];
        this.availableCopies = availableCopies;
        this.location =location;
        this.reviews = [];
    }

    /**
     * Returns the number of available copies of the book.
     */
    getAvailableCopies(): number {
        return this.availableCopies;
    }

    /**
     * Adds a review to the book if valid.
     * @param review A Review object to add.
     * @returns The added Review or undefined if invalid.
     */
    addReview(review: Review): Review | undefined {
        if (review && review.rating && review.comment && review.memberId && review.bookId) {
            this.reviews.push(review);
            return review;
        }
        // Silently skip invalid review
        return undefined;
    }

    /**
     * Calculates the average rating from all reviews.
     * @returns Average rating as a number or null if no reviews exist.
     */
    getAverageRating(): number | null {
        if (this.reviews.length === 0) {
            return null;
        }

        const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);
        return parseFloat((total / this.reviews.length).toFixed(2));
    }
}
