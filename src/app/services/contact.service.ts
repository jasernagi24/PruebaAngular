import { Injectable } from '@angular/core';
import {ContactModel} from '../models/contact.model'

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: ContactModel[];
  contact = new ContactModel

  constructor() { }

  //Funcion del servicio que permite agregar al contacto en el localstorage
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

  //Funcion del servicio que permite obtener una lista de los contactos guardados en el local storage
  getContact (){
    if(localStorage.getItem('contacts') === null){
      this.contacts = [];
    }
    else{
    this.contacts = JSON.parse(localStorage.getItem('contacts'));
    }
    return this.contacts
  }

  //Funcion del servicio que permite eliminar un contacto de la lista guardada en el local storage
  deleteContact(contact: ContactModel) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (contact == this.contacts[i]) {
        this.contacts.splice(i, 1);
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    }
  }

//Funcion del servicio que permite seleccionar el contacto de la lista guardada en el local storage utilizando el id
  selectionContact(idContact:string){
    for (let i = 0; i < this.contacts.length; i++) {
      if (idContact == this.contacts[i].id) {
        return this.contacts[i]
      }
    }
  }

  //Funcion del servicio que permite actualizar el contacto de la lista guardada en el local storage utilizando el id
  updateContact(idContact:string, contact: ContactModel){
    for(let i = 0; i < this.contacts.length; i++){
      if (idContact == this.contacts[i].id) {
        this.contacts[i] = contact;
        localStorage.setItem('contacts', JSON.stringify(this.contacts));
      }
    }
  }

}
