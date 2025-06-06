/**
 * Represents a payment transaction for a member.
 */
export class Payment {
  // Unique identifier for the payment transaction
  paymentId: string;
  // Identifier for the member making the payment
  memberId: string;
  // Amount of the payment
  amount: number;
  // Date when the payment was made
  paymentDate: Date;
  // Payment method (e.g., credit, debit, cash, QR code)
  method: string;

  // Constructor to initialize a Payment instance
  constructor(paymentId: string, memberId: string, amount: number, paymentDate: Date, method: string) {
    this.paymentId = paymentId;
    this.memberId = memberId;
    this.amount = amount;
    this.paymentDate = paymentDate;
    this.method = method;
  }

  // Processes the payment based on the provided payment type
  processPayment(paymentType: string): boolean {
    // Check if payment type is supported (credit, debit, cash, or QR code)
    if (paymentType === "credit" || paymentType === "debit" || paymentType === "cash" || paymentType === "QR code") {
      // Log payment processing details
      console.log(`Processing ${paymentType} payment of ${this.amount} for member ${this.memberId}.`);
      // Update payment method
      this.method = paymentType;
      // Update payment date to current date
      this.paymentDate = new Date();
      // Return true to indicate successful processing
      return true;
    } else {
      // Log unsupported payment type
      console.log(`Payment type "${paymentType}" is not supported.`);
      // Return false to indicate failed processing
      return false;
    }
  }
}