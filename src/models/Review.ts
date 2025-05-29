
export class Review{
    reviewId: string;
    memberId : string;
    bookId: string;
    rating: number;
 

    constructor(reviewId: string,memberId: string, bookId: string, rating:number, comment: string){
        this.reviewId = reviewId;
        this.memberId = memberId;
        this.bookId = bookId;
        this.rating = rating;
        

    }

}
