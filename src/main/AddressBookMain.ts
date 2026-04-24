import {Contact} from '../model/Contact';
import { AddressBook } from '../model/AddressBook';
import readline from "readline-sync";

console.log("Welcome to Address Book Program");

const addressBook = new AddressBook();

// Take input from user - by readline-sync
const firstName = readline.question("Enter First Name: ");
const lastName = readline.question("Enter Last Name: ");
const address = readline.question("Enter Address: ");
const city = readline.question("Enter City: ");
const state = readline.question("Enter State: ");
const zip = readline.question("Enter Zip: ");
const phone = readline.question("Enter Phone: ");
const email = readline.question("Enter Email: ");

const contact = new Contact(
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phone,
    email
);

addressBook.addContact(contact);


console.log("Edit the contact");

const fName = readline.question("Enter the first Name to Edit: ");
const lName = readline.question("Enter the last Name to Edit: ");

let existing = addressBook.findContact(fName,lName);

if(!existing){
    console.log("Contact not Found");
}else{

    const address = readline.question("Enter Address: ");
    const city = readline.question("Enter City: ");
    const state = readline.question("Enter State: ");
    const zip = readline.question("Enter Zip: ");
    const phone = readline.question("Enter Phone: ");
    const email = readline.question("Enter Email: ");

    const updatedContact = new Contact(
        firstName,
        lastName,
        address,
        city,
        state,
        zip,
        phone,
        email
    );

    let res = addressBook.editContact(fName,lName,updatedContact);

    if(res){
        console.log("Contact Updated Successfully");
    }else{
         console.log("Contact Updation Failed");
    }
}

    
