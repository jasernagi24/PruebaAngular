import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';
import { ContactModel } from '../../models/contact.model';
import { ContactService } from '../../services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contact = new ContactModel();

  constructor(private activatedRoute: ActivatedRoute, private _contactService: ContactService, private router:Router) { }

  ngOnInit(): void {
    this.contact = this._contactService.selectionContact(this.activatedRoute.snapshot.params.id)
  }

  updateContact(contact: NgForm) {
    try{
    if(this.contact.id == "" || this.contact.name == "" || this.contact.cellphone == "" || this.contact.direction == "" || this.contact.birthday == null){
      alert('Nesecitas ingresar todos los campos')
    }
    else{
    if(confirm('Are you sure you want to update this contact?')) {
      this._contactService.updateContact(this.activatedRoute.snapshot.params.id, this.contact);
      this.router.navigateByUrl('/contactList')
    }
  }
}
    catch (e){
      console.log(e)
    }
  }

}
