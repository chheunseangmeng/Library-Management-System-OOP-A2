export class Review{
    public reviewid:string
    public memberid:string
    public bookid :string
    public rating:number
    public comment:string

    constructor(reviewid:string,memberid:string, bookid:string, rating:number,comment:string ) {
        this.reviewid = reviewid;
        this.memberid = memberid;
        this.bookid = bookid;
        this.rating = rating;
        this.comment = comment;
    }
}