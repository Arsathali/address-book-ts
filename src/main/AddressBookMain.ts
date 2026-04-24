import {Contact} from '../model/Contact';
import { AddressBook } from '../model/AddressBook';
import readline from "readline-sync";
import { AddressBookSystem } from '../model/AddressBookSystems';

console.log("Welcome to Address Book Program");

const system = new AddressBookSystem();

let running : boolean = true;

while (running) {
    console.log("\n1. Add AddressBook");
    console.log("2. Add Contact");
    console.log("3. Edit Contact");
    console.log("4. Delete Contact");
    console.log("5. View Contacts");
    console.log("6. Search by city");
    console.log("7. Search by state");
    console.log("8. View By city");
    console.log("9. View By state");
    console.log("10. Exit");

    const choice = readline.questionInt("Enter choice: ");

    switch (choice) {

        case 1:{

            const name = readline.question("Enter Address Book Name: ");
            const created = system.addAddressBook(name);

            if (created) console.log("Address Book created");
            else console.log("Already exists");
            break;

        }

        case 2:
            {
            const bookName = readline.question("Enter Address Book Name: ");
            const book = system.getAddressBook(bookName);

            if (!book) {
                console.log("Address Book not found");
                break;
            }

            let choice : string;
            do{
                addContact(book);
                choice = readline.question("Do You want to Add Another Contact (Y/N)");
            }while(choice.toLowerCase() === 'y');

            break;

        }
        case 3:{
            const bookName = readline.question("Enter Address Book Name: ");
            const book = system.getAddressBook(bookName);

            if (!book) {
                console.log("Not found");
                break;
            }

            editContact(book);
            break;
        }
        case 4:{
            const bookName = readline.question("Enter Address Book Name: ");
            const book = system.getAddressBook(bookName);

            if (!book) {
                console.log("Not found");
                break;
            }
            
            deleteContact(book);
            break;
        }
        case 5: {
            const bookName = readline.question("Enter Address Book Name: ");
            const book = system.getAddressBook(bookName);

            if (!book) {
                console.log("Not found");
                break;
            }
            displayContacts(book);
            break;
        }
        case 6:{
            const city = readline.question("Enter the City :");
            const contacts: Contact[] = system.searchByCity(city);
            console.log(contacts);
            break;  
        }
        case 7:{
            const state = readline.question("Enter the State :");
            const contacts: Contact[] = system.searchByState(state);
            console.log(contacts);
            break;
        }

        case 8 : {

           const cityMap = system.viewByCity();

           for(const city in cityMap){
              console.log(`${city} ---> ${cityMap[city]}`);
            }

           break;
        }
        case 9 : {

            const stateMap = system.viewByState();

           for(const state in stateMap){
              console.log(`${state} ---> ${stateMap[state]}`);
            }

           break;
        }
        case 10:
            console.log("Exited");
            running = false;
            break; 

        default:
            console.log("Invalid choice");
    }
}

function addContact(addressBook : AddressBook){
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

    const isAdded = addressBook.addContact(contact);

    console.log(isAdded ? "Added The Contact Successfully" : "Duplicate Contact! Not Added");
    
}
    
function editContact(addressBook : AddressBook){
    
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

function deleteContact(addressBook : AddressBook){

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

function displayContacts(addressBook : AddressBook){
    const contacts = addressBook.getContacts();
    console.log(contacts);
}