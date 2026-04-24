
export class Contact {
    constructor(
        public firstName: string,
        public lastName: string,
        public address: string,
        public city: string,
        public state: string,
        public zip: string,
        public phone: string,
        public email: string
    ){}

    equals(other: Contact) : boolean {
        return (
          this.firstName === other.firstName &&
          this.lastName === other.lastName  
        );
    }

    toString() : string{
        return `${this.firstName} ${this.lastName} - ${this.city}, ${this.state}`;
    }
}

