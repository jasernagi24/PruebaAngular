import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { ContactModel } from '../../models/contact.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts:ContactModel[]=[];
  numContacts:number = 0;
  numBirthdat:number = 0;
  today = new Date();

  constructor(private _contactService:ContactService) { }

  ngOnInit(): void {
    this.contacts = this._contactService.getContact()
    this.totalContacts()
    this.today.getDate()
    this.totalBirthday()
    console.log(this.today)

  }

  totalContacts(){
    for(var i=0; i < this.contacts.length; i++){
      this.numContacts += 1;
    }
  }

  totalBirthday(){
    var dayToday = this.today.getUTCDate();
    var monthToday = this.today.getUTCMonth();
    for(var i=0; i < this.contacts.length; i++){
      let dayBirthday = new Date(this.contacts[i].birthday)
      if ( dayToday == dayBirthday.getUTCDate() && monthToday == dayBirthday.getUTCMonth()){
        this.numBirthdat += 1;
      }
    }

  }

}
