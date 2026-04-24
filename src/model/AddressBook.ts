import { Contact } from './Contact';

export class AddressBook{

    private contact: Contact[] = []; 

    addContact(contact : Contact) : void {
        this.contact.push(contact);
    }

    getContacts() : Contact[] {
        return this.contact;
    }
}