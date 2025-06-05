import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from 'emailjs-com';

@Component({
  standalone: true,
  selector: 'app-registration-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  @Input() selectedEvent: any;
  @Output() formClosed = new EventEmitter<void>();

  formData = {
    event_name: '',
    name: '',
    address: '',
    province: '',
    country: '',
    email: '',
    phone: '',
    foodAllergies: 'No',
    comments: '',
    Tshirt: '',
    HoodieSize: ''
  };

  ngOnChanges() {
    if (this.selectedEvent) {
      this.formData.event_name = this.selectedEvent.event_name;
    }
  }

  closeForm() {
    this.formClosed.emit();
  }

  submitForm(event: Event) {
    event.preventDefault();
    emailjs.sendForm(
      'service_17rvjoc',
      'template_69n0l2q',
      event.target as HTMLFormElement,
      'HchgGW9DNC9989hVy'
    ).then(
      (result) => {
        console.log('Form sent successfully', result.text);
        alert('Your form has been submitted successfully.');
        this.closeForm();
      },
      (error) => {
        console.error('Error sending form', error.text);
        alert('An error occurred. Please try again.');
      }
    );
  }
}
