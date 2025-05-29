export class Notification {
    notificationId: string;
    memberId: string;           // Who receives the notification
    message: string;            // Content of the notification
    dateSent: Date;             // When it was sent
    isRead: boolean;            // Whether the user has read it

    constructor(notificationId: string, memberId: string, message: string,dataSent:Date,isRead:boolean) {
        this.notificationId = notificationId;
        this.memberId = memberId;
        this.message = message;
        this.dateSent = dataSent;
        this.isRead = isRead;
    }

    markAsRead(): void {
        this.isRead = true;
    }

    getSummary(): string {
        return `${this.dateSent.toLocaleDateString()} - ${this.message}`;
    }
}
