import { Contact } from './Contact';

export class AddressBook{

    private contact: Contact[] = []; 

    addContact(contact : Contact) : boolean {

        const exists = this.contact.some(c=>c.equals(contact));

        if(exists){
            return false;
        }

        this.contact.push(contact);
        return true;
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

    sortByName() : Contact[]{

        return this.contact.sort((a,b) =>
            {
                const firstCompare = a.firstName.localeCompare(b.firstName);
                if (firstCompare !== 0) return firstCompare;

                return a.lastName.localeCompare(b.lastName);
            }
        );
    }


}