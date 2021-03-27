import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../models/contact.model';
import {SafeStyle} from '@angular/platform-browser';


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

  constructor( private contactService: ContactService ) {
  }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe( x => {
      this.dataSource = new MatTableDataSource(x);
      this.isLoaded = true;
      // console.log(this.dataSource);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  selectRow(row: Contact): void {
    console.log(row);
    this.selectedRow = row;
    this.isRowSelected = true;
  }

  getClass(row: Contact): SafeStyle {
    return {
      silver: row === this.selectedRow
    };
  }

}
