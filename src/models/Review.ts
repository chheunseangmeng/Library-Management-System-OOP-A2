export class Review{
    public reviewId:string
    public memberId:string
    public bookId :string
    public rating:number
    public comment:string

    constructor(reviewId:string,memberId:string, bookId:string, rating:number,comment:string ) {
        this.reviewId = reviewId;
        this.memberId = memberId;
        this.bookId = bookId;
        this.rating = rating;
        this.comment = comment;
    }
    

     // Get a summary of the review
    getSummary(): string {
        return `Rating: ${this.rating}/5 - "${this.comment}" by Member ${this.memberId}`;
    }

    // Check if the review is valid
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
