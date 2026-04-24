import {Contact} from '../model/Contact';
import { AddressBook } from '../model/AddressBook';


console.log("Welcome to Address Book Program");

const addressBook = new AddressBook();

const contact = new Contact(
    "Arsha",
    "K",
    "123 Street",
    "Chennai",
    "TN",
    "600001",
    "9876543210",
    "arsha@email.com"
);

addressBook.addContact(contact);
console.log(addressBook.getContacts());
    
