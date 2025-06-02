import { Book } from "./Book";

export class Librarian{
    public book:Book[] = [];
    public librarian:string;
    public name:string;
    public email:string;

    constructor(librarian:string, name:string, email:string) {
        this.librarian = librarian;
        this.name = name;
        this.email = email;
    }

    registerBook(book: Book):void{}
    
}