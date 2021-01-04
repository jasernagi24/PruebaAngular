import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ContactModel} from '../../models/contact.model';
import {ContactService} from '../../services/contact.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {

  contacts:ContactModel[]=[];
  contact = new ContactModel();

  constructor(private _contactService:ContactService ) { }

  ngOnInit(): void {
    this.contacts = this._contactService.getContact()
  }

  //Funcion que permite eliminar un  contacto de la lista
  deleteContact(contact: ContactModel) {
    if(confirm('Are you sure you want to delete this contact?')) {
      this._contactService.deleteContact(contact);
    }
  }

}
