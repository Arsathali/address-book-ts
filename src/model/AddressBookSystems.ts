import { AddressBook } from "./AddressBook";
import { Contact } from "./Contact";

export class AddressBookSystem {

    private addressBooks : Record<string,AddressBook> = {};

    addAddressBook(name: string){

        if(this.addressBooks[name]){
            return false;
        }

        this.addressBooks[name] = new AddressBook();
        return true;
    }

    getAddressBook(name: string): AddressBook | undefined {
        return this.addressBooks[name];
    }

    getAllBooks(): Record<string, AddressBook> {
        return this.addressBooks;
    }

    searchByCity(city : string) : Contact[]{

        const result : Contact[] = [];

        for(const book in this.addressBooks){

            const contact = this.addressBooks[book]
                    ?.getContacts()
                    .filter(c => c.city === city) || [];
            
            result.push(...contact);
        }
        return result;
    }

    searchByState(state : string){

        const result : Contact[] = [];

        for(const book in this.addressBooks){

            const contact = this.addressBooks[book]
                    ?.getContacts()
                    .filter(c => c.state === state) || [];
            
            result.push(...contact);
        }
        return result;
    }
}