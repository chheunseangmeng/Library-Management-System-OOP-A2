/**
 * Represents a review made by a member for a book.
 */
export class Review {
  public reviewId: string; // Unique ID of the review
  public memberId: string; // ID of the member who made the review
  public bookId: string;   // ID of the book being reviewed
  public rating: number;   // Rating given by the member (1 to 5)
  public comment: string;  // Comment written by the member

  /**
   * Constructs a new Review instance.
   * @param reviewId - Unique identifier of the review.
   * @param memberId - ID of the member who submitted the review.
   * @param bookId - ID of the book being reviewed.
   * @param rating - Rating from 1 to 5.
   * @param comment - Written feedback on the book.
   */
  constructor(reviewId: string, memberId: string, bookId: string, rating: number, comment: string) {
    this.reviewId = reviewId;
    this.memberId = memberId;
    this.bookId = bookId;
    this.rating = rating;
    this.comment = comment;
  }

  /**
   * Get a readable summary of the review.
   * @returns A string summarizing the rating and comment.
   */
  getSummary(): string {
    return `Rating: ${this.rating}/5 - "${this.comment}" by Member ${this.memberId}`;
  }

  /**
   * Validates the review details.
   * @returns True if all fields are valid; false otherwise.
   */
  isValid(): boolean {
    return (
      this.reviewId !== '' &&
      this.memberId !== '' &&
      this.bookId !== '' &&
      this.rating >= 1 &&
      this.rating <= 5 &&
      this.comment.trim().length > 0
    );
  }
}
