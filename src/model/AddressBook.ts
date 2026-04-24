import { Contact } from './Contact';

export class AddressBook{

    private contact: Contact[] = []; 

    addContact(contact : Contact) : void {
        this.contact.push(contact);
    }

    getContacts() : Contact[] {
        return this.contact;
    }

    findContact(firstName:string, lastName: string) : Contact | undefined {
        return this.contact.find(
            c=> c.firstName === firstName && c.lastName === lastName
        );
    }


    editContact(firstName : string , lastName : string , updatedContact : Contact) : boolean {

        let index =  this.contact.findIndex(c=> c.firstName === firstName && c.lastName === lastName);

        if (index === -1) return false;

        this.contact[index] = updatedContact;
        return true;
    }

    deleteContact(firstName : string , lastName : string) : boolean{
        
        let initialLength = this.contact.length;

        this.contact = this.contact.filter(
             c=> !(c.firstName === firstName && c.lastName === lastName)
        );

        return this.contact.length < initialLength;  
    }


}