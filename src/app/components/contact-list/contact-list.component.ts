import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  deleteContact(index: number): void {
    this.contactService.deleteContact(index);
    this.contacts = this.contactService.getContacts();
  }

  goToEditContact(index: number): void {
    this.router.navigate(['/edit', index]); // Make sure your route looks like /edit/:id
  }
}
