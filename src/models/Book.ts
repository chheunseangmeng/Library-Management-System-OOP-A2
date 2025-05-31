import { BookFormat } from "./enum/BookFormat";
import { Review } from "./Review";

export abstract class Book {
  borrowCopy() {
    throw new Error('Method not implemented.');
  }
  isAvailable(): unknown {
    throw new Error('Method not implemented.');
  }
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
  id: any;

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

    getAvailableCopies(): number {
        return this.availableCopies;
    }

    addReview(review: Review): Review | undefined {
        if (review && review.rating && review.comment && review.memberId && review.bookId) {
            this.reviews.push(review);
            return review;
        }
        return undefined;
    }

    getAverageRating(): number | null {
        if (this.reviews.length === 0) {
            return null;
        }
        const total = this.reviews.reduce((sum, r) => sum + r.rating, 0);
        return parseFloat((total / this.reviews.length).toFixed(2));
    }
}