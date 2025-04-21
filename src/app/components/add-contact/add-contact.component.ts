import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  newContact: Contact = {
    id: 0,
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(private contactService: ContactService, private router: Router) {}

  addContact() {
    if (
      this.newContact.fName &&
      this.newContact.lName &&
      this.newContact.phoneNumber &&
      this.newContact.email
    ) {
      this.contactService.addContact(this.newContact);
      this.router.navigate(['/']);
    } else {
      alert('Please fill in all fields.');
    }
  }
}

