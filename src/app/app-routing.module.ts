import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'contactList', component:ContactListComponent},
  {path: 'newContact', component:NewContactComponent},
  {path: 'updateContact/:id', component:UpdateContactComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
