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


}
