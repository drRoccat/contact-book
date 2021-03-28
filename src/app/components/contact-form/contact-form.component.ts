import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contact: Contact;
  isNew = true;

  public editForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, Validators.required),
    surname: new FormControl(null, Validators.required),
    birthDay: new FormControl(null, Validators.required),
    avatar: new FormControl(null, Validators.required)
  });

  constructor( private router: Router, private route: ActivatedRoute, private contactService: ContactService ) { }

  ngOnInit(): void {
    this.route.data
      .subscribe((data) => {

          this.contact = data.contact;

          if (this.contact !== undefined) {
            this.isNew = false;
            this.editForm.patchValue({
              id: this.contact.id,
              name: this.contact.name,
              surname: this.contact.surname,
              birthDay: new Date(this.contact.birthDay),
              avatar: this.contact.avatar,
            });
          }

        }
      );
  }

  onSubmit(): void {
    const formData = this.editForm.value;

    if (this.isNew === true) {
      this.contactService.addContact(formData).subscribe( () => this.router.navigate(['/contacts']));
    } else {
      this.contactService.updateContact(formData).subscribe( () => this.router.navigate(['/contacts']));
    }
  }

}
