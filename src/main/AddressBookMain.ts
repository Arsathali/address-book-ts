import {Contact} from '../model/Contact';
import { AddressBook } from '../model/AddressBook';
import readline from "readline-sync";

console.log("Welcome to Address Book Program");

const addressBook = new AddressBook();

let running : boolean = true;

while (running) {
    console.log("\n1. Add Contact");
    console.log("2. Edit Contact");
    console.log("3. Delete Contact");
    console.log("4. View Contacts");
    console.log("5. Exit");

    const choice = readline.questionInt("Enter choice: ");

    switch (choice) {
        case 1:
            addContact();
            break;

        case 2:
            editContact();
            break;

        case 3:
            deleteContact();
            break;

        case 4:
            displayContacts();
            break;

        case 5:
            console.log("Exited");
            running = false;
            break; 

        default:
            console.log("Invalid choice");
    }
}

function addContact(){
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
}
    
function editContact(){
    
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
            fName,
            lName,
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
}

function deleteContact(){

    console.log("Edit the contact");

    const fName = readline.question("Enter the first Name to Edit: ");
    const lName = readline.question("Enter the last Name to Edit: ");

    let result = addressBook.deleteContact(fName,lName);

    if(result){
            console.log("Contact Deleted Successfully");
        }else{
            console.log("Contact Deletion Failed");
        }
}

function displayContacts(){
    const contacts = addressBook.getContacts();
    console.log(contacts);
}