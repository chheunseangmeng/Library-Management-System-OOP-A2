
export class Payment {
  paymentId: string;
  memberId: string;
  amount: number;
  paymentDate: Date;
  method: string;

  constructor(paymentId: string, memberId: string, amount: number, paymentDate: Date, method: string) {
    this.paymentId = paymentId;
    this.memberId = memberId;
    this.amount = amount;
    this.paymentDate = paymentDate;
    this.method = method;
  }

  processPayment(paymentType: string): boolean {
    if (paymentType === "credit" || paymentType === "debit" || paymentType === "cash") {
      console.log(`Processing ${paymentType} payment of ${this.amount} for member ${this.memberId}.`);
      this.method = paymentType;
      this.paymentDate = new Date(); // update to current date
      return true;
    } else {
      console.log(`Payment type "${paymentType}" is not supported.`);
      return false;
    }
  }
}

// // Example usage:
// const payment = new Payment("PMT001", "MBR123", 150.0, new Date(), "");
// const success = payment.processPayment("credit");

// console.log("Payment processed successfully?", success);
