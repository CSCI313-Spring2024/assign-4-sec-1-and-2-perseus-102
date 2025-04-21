import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    {
      id: 1,
      fName: 'John',
      lName: 'Adams',
      phoneNumber: '701-000-1000',
      email: 'john@example.com'
    },
    {
      id: 2,
      fName: 'Mary',
      lName: 'Jane',
      phoneNumber: '701-000-1000',
      email: 'mary@example.com'
    }
  ];

  private nextId = 3;

  constructor() {}

  getContact(index: number) {
    return this.contacts[index];
  }
  
  // Get all contacts
  getContacts(): Contact[] {
    return this.contacts;
  }
  

  // Add a new contact
  addContact(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }

  // Get a single contact by ID
  getContactById(id: number): Contact | undefined {
    return this.contacts.find(c => c.id === id);
  }

  // Update a contact by ID
  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  // Delete a contact by ID
  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
  
}
