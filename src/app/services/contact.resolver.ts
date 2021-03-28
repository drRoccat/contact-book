import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Contact} from '../models/contact.model';
import {Observable} from 'rxjs';
import {ContactService} from './contact.service';
import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class ContactResolver implements Resolve<Contact> {

  constructor(private contactService: ContactService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Contact> | Promise<Contact> | Contact {
    return this.contactService.getContact(+route.params.id);
  }

}
