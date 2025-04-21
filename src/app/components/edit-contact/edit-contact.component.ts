import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent {
  contact: any = { fName: '', lName: '', phoneNumber: '', email: '' };
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const existing = this.contactService.getContact(this.id);
    if (existing) {
      this.contact = { ...existing };
    } else {
      this.router.navigate(['/']);
    }
  }

  saveContact() {
    this.contactService.updateContact(this.contact);
    this.router.navigate(['/']);
  }
}
