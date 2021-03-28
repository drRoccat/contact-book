import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact.model';
import {SafeStyle} from '@angular/platform-browser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  displayedColumns: string[] = ['Avatar', 'Name', 'Surname', 'Date of birth'];
  contacts: Contact[];
  dataSource;
  isLoaded = false;
  selectedRow: Contact;
  isRowSelected = false;

  constructor( private contactService: ContactService, private router: Router ) {
  }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe( (contacts: Contact[]) => {
      this.dataSource = new MatTableDataSource(contacts);
      this.isLoaded = true;
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(row: Contact): void {
    this.selectedRow = row;
    this.isRowSelected = true;
  }

  getClass(row: Contact): SafeStyle {
    return {
      silver: row === this.selectedRow
    };
  }

  openForm(type: string): void {
    if (type === 'add'){
      this.router.navigate(['/contact']);
    } else if (type === 'edit'){
      this.router.navigate(['/contact', this.selectedRow.id]);
    } else {
      this.ngOnInit();
    }
  }

  deleteContact(): void {
    this.contactService.deleteContact(this.selectedRow.id).subscribe(() => this.ngOnInit());
  }

}
