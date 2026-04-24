import { AddressBook } from "./AddressBook";

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

}