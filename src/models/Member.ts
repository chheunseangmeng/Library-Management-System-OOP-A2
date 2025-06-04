/**
 * Interface representing the type of membership,
 * including limits on reservations and loan period.
 */
export interface MemberType {
  /** Unique identifier for the membership type */
  typeId: string;
  /** Name of the membership type (e.g., Regular, Premium) */
  typeName: string;
  /** Maximum number of books the member can reserve */
  maxReservations: number;
  /** Number of days allowed for loan */
  loanPeriodDays: number;
}

/**
 * Class representing a library member with personal details and membership info.
 */
export class Member {
  /** Unique identifier for the member */
  memberId: string;
  /** Full name of the member */
  fullName: string;
  /** Email address of the member */
  email: string;
  /** Phone number of the member */
  phoneNumber: string;
  /** Residential address of the member */
  address: string;
  /** Membership type object defining the member's privileges */
  memberType: MemberType;

  /**
   * Creates a new Member instance.
   * @param memberId - Unique ID assigned to the member
   * @param fullName - Member's full name
   * @param email - Member's email address
   * @param phoneNumber - Member's phone number
   * @param address - Member's residential address
   * @param memberType - The membership type details for this member
   */
  constructor(
    memberId: string,
    fullName: string,
    email: string,
    phoneNumber: string,
    address: string,
    memberType: MemberType
  ) {
    this.memberId = memberId;
    this.fullName = fullName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.memberType = memberType;
  }

  /**
   * Returns a formatted string of member details.
   * Useful for logging or display purposes.
   * @returns A string containing member's information.
   */
  getMemberInfo(): string {
    return `
Member Details:
- ID: ${this.memberId}
- Name: ${this.fullName}
- Email: ${this.email}
- Phone: ${this.phoneNumber}
- Address: ${this.address}
- Member Type: ${this.memberType.typeName}
`;
  }
}
