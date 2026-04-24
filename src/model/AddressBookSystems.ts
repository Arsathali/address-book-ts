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

    viewByCity(): Record<string,Contact[]>{


        const cityMap : Record<string,Contact[]> = {};

        for (const book of Object.values(this.addressBooks)) {
            for (const contact of book.getContacts()) {

                if (!cityMap[contact.city]) {
                    cityMap[contact.city] = [];
                }

                cityMap[contact.city]!.push(contact);
            }
        }
        return cityMap;
    }

    viewByState(): Record<string,Contact[]>{


        const stateMap : Record<string,Contact[]> = {};

        for (const book of Object.values(this.addressBooks)) {
            for (const contact of book.getContacts()) {

                if (!stateMap[contact.state]) {
                    stateMap[contact.state] = [];
                }

                stateMap[contact.state]!.push(contact);
            }
        }
        return stateMap;
    }

    countByCity(): Record<string, number> {

        const cityCount: Record<string, number> = {};

        for (const book of Object.values(this.addressBooks)) {
            for (const contact of book.getContacts()) {

                if (contact.city) {
                    cityCount[contact.city!] ||= 0;
                    cityCount[contact.city]!++;
                }
            }
        }

        return cityCount;
    }

    countByState(): Record<string, number> {

        const stateCount: Record<string, number> = {};

        for (const book of Object.values(this.addressBooks)) {
            for (const contact of book.getContacts()) {

                stateCount[contact.state] ||= 0;
                stateCount[contact.state]!++;
            }
        }

        return stateCount;
    }

}