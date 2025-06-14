import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  phone = '';
  country = '';
  message = '';
  error = '';
  submitted = false;

  cards = [
    {
      title: 'Find Us',
      icon: 'fas fa-map-marker-alt',
      text: 'Avalon - VWE Property - Ontario - Canada',
      link: 'https://youtu.be/qPPbk1E2vKg'
    },
    {
      title: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      text: 'Chat with us !',
      link: 'https://wa.me/+15198516450/?text=Hi Rob Freeman. I am interested in some information about the Vision Without Eyes Seminar.'
    },
    {
      title: 'Mail Us',
      icon: 'far fa-envelope-open',
      text: "We're ALL born with this innate ability to see and read without our eyes.",
      link: 'mailto:robfreeman@look.ca'
    },
    {
      title: 'Follow Us',
      icon: 'fas fa-user',
      text: '',
      link: ''
    }
  ];

  leftBoxes = this.cards.slice(0, 2);
  rightBoxes = this.cards.slice(2, 4);

  onSubmit(): void {
    if (!this.name.trim() || !this.email.trim() || !this.phone.trim() || !this.country.trim() || !this.message.trim()) {
      this.error = 'All fields are required.';
      return;
    }

    emailjs.send(
      'service_tdhte6r',
      'template_z3giq5h',
      {
        from_name: this.name,
        from_email: this.email,
        message: this.message,
        phone: this.phone,
        country: this.country,
        to_email: this.email
      },
      'HchgGW9DNC9989hVy'
    ).then(result => {
      console.log('Email sent successfully:', result.text);
      this.error = '';
      this.submitted = true;
      alert('Form submitted successfully.');

      this.name = '';
      this.email = '';
      this.phone = '';
      this.country = '';
      this.message = '';
    }).catch(error => {
      console.error('EmailJS Error:', error);
      this.error = `An error occurred: ${error.text || JSON.stringify(error)}`;
    });
  }

  currentYear: number = new Date().getFullYear();
}
