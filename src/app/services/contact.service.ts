import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Contact} from '../models/contact.model';


@Injectable({providedIn: 'root'})
export class ContactService {

  constructor(public httpClient: HttpClient) {
  }

  public getAllContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>('http://localhost:3000/contacts');
  }

  public getContact(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`http://localhost:3000/contacts/${id}`);
  }

  public addContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>('http://localhost:3000/contacts', contact);
  }

  public updateContact(contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(`http://localhost:3000/contacts/${contact.id}`, contact);
  }

  public deleteContact(id: number): Observable<Contact> {
    return this.httpClient.delete<Contact>(`http://localhost:3000/contacts/${id}`);
  }

}
