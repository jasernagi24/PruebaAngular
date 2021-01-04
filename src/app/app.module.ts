import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {ContactService} from './services/contact.service'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactListComponent,
    NewContactComponent,
    UpdateContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    ContactService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
