import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ContactModel} from '../../models/contact.model';
import { NgForm } from '@angular/forms';
import {ContactService} from '../../services/contact.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  contact = new ContactModel();

  constructor(private _contactService:ContactService, private router:Router) { }

  ngOnInit(): void {
  }

  //Funcion que permite agregar un nuevo contacto a la lista, al momento de llenar el formulario, todos los datos 
  //deben de estar digitados para que permita guardar al contacto 
  addNewContact(contact:NgForm){
    try{
      if(this.contact.id == "" || this.contact.name == "" || this.contact.cellphone == "" || this.contact.direction == "" || this.contact.birthday == null){
        alert('Nesecitas ingresar todos los campos')
      }
      else{
        if(confirm('Are you sure you want to add this contact?')) {
        this._contactService.addContact(this.contact)
        this.router.navigateByUrl('/contactList')
        }
      }
    }
    catch (e){
      console.log(e)
    }
  }

}
