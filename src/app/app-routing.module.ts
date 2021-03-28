import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './components/contacts/contacts.component';
import {ContactFormComponent} from './components/contact-form/contact-form.component';
import {ContactResolver} from './services/contact.resolver';

const routes: Routes = [
  {path : '', redirectTo: 'contacts', pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent },
  {path: 'contact', component: ContactFormComponent },
  {path: 'contact/:id', component: ContactFormComponent, resolve: { contact: ContactResolver }},
  {path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
