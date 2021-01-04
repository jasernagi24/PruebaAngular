import { Injectable } from '@angular/core';
import {ContactModel} from '../models/contact.model'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: ContactModel[];
  contact = new ContactModel

  constructor() { }

  addContact (contact:ContactModel){
    console.log(contact)
    if(localStorage.getItem('contacts') === null){
      this.contacts.push(contact)
      localStorage.setItem('contacts', JSON.stringify(this.contacts))
    }
    else{
        this.contacts = JSON.parse(localStorage.getItem('contacts'))
        this.contacts.push(contact)
        localStorage.setItem('contacts', JSON.stringify(this.contacts))
    }
  }

  getContact (){
    if(localStorage.getItem('contacts') === null){
      this.contacts = [];
    }
    else{
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return this.contacts
  }

  deleteContact(contact: ContactModel) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact == this.contacts[i]) {
        this.contacts.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    }
  }

  selectionContact(idContact:string){
    
    for (let i = 0; i < this.contacts.length; i++) {
      if (idContact == this.contacts[i].id) {
        return this.contacts[i]
      }
    }
  }

  updateContact(idContact:string, contact: ContactModel){
    for(let i = 0; i < this.contacts.length; i++){
      if (idContact == this.contacts[i].id) {
        this.contacts[i] = contact;
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    }
  }

}
