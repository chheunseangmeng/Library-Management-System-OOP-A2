/**
 * Represents a notification sent to a member.
 */
export class Notification {
  notificationId: string; // Unique ID of the notification
  memberId: string;       // ID of the member who receives the notification
  message: string;        // Content/message of the notification
  dateSent: Date;         // Timestamp when the notification was sent
  isRead: boolean;        // Status indicating whether the notification has been read

  /**
   * Constructs a new Notification instance.
   * @param notificationId - Unique identifier for the notification.
   * @param memberId - ID of the member to whom the notification is sent.
   * @param message - The message content of the notification.
   * @param dataSent - The date when the notification was sent.
   * @param isRead - Boolean indicating if the notification has been read.
   */
  constructor(notificationId: string, memberId: string, message: string, dataSent: Date, isRead: boolean) {
    this.notificationId = notificationId;
    this.memberId = memberId;
    this.message = message;
    this.dateSent = dataSent;
    this.isRead = isRead;
  }

  /**
   * Marks the notification as read.
   */
  markAsRead(): void {
    this.isRead = true;
  }

  /**
   * Provides a summary of the notification.
   * @returns A string with the date and message content.
   */
  getSummary(): string {
    return `${this.dateSent.toLocaleDateString()} - ${this.message}`;
  }
}
