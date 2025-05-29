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
}
