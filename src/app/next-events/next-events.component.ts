import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-next-events',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './next-events.component.html',
  styleUrls: ['./next-events.component.css']
})
export class NextEventsComponent implements OnInit {

  // Eventos hardcodeados
  events = [
    {
      image: './assets/img/mshasta.png',
      date: new Date(2025, 7, 9),
      message: 'Sun Aug 17, 2025',
      event_name: 'An Epic Journey Beyond the Mind and Stars. Mount Shasta, CA, USA',
      location: 'Mount Shasta, CA, USA',
      summary: 'We present three seminars in one extraordinary experience: Telekinesis, Mindsight, and UFO.'
    },
    {
      image: './assets/img/orlando 2025.png',
      date: new Date(2025, 10, 15),
      message: 'Sun Nov 23, 2025',
      event_name: 'Awakening Mindsight and Mental Energy. Orlando, FL, USA',
      location: 'Orlando, FL, USA',
      summary: 'Designed to awaken and develop two powerful human abilities: mindsight and mental energy.'
    }
  ];

  upcomingEvents: any[] = [];
  showForm = false;
  selectedEvent: any = null;

  formData = {
    event_name: '',
    name: '',
    streetCity: '',
    province: '',
    country: '',
    TypeSize: '',
    email: '',
    phone: '',
    foodAllergies: 'No',
    comments: '',
    Tshirt: '',
    HoodieSize: '',
    allergyDetails: ''
  };

  constructor() {}

  ngOnInit() {
    const today = new Date();
    this.upcomingEvents = this.events
      .filter(e => new Date(e.date) > today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }

  getDaysLeft(date: Date): number {
    const now = new Date();
    const diff = new Date(date).getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  openForm(event: any) {
    this.selectedEvent = event;
    this.formData.event_name = event.event_name;
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.formData = {
      event_name: '',
      name: '',
      streetCity: '',
      province: '',
      country: '',
      TypeSize: '',
      email: '',
      phone: '',
      foodAllergies: 'No',
      comments: '',
      Tshirt: '',
      HoodieSize: '',
      allergyDetails: ''
    };
  }

  onFoodAllergiesChange(value: string) {
    this.formData.foodAllergies = value;
    if (value === 'No') {
      this.formData.allergyDetails = '';
    }
  }

  submitForm(event: Event) {
    event.preventDefault();

    // Validación manual
    if (!this.formData.name.trim()) {
      alert('Name is required.');
      return;
    }
    if (!this.formData.streetCity.trim()) {
      alert('Street and City are required.');
      return;
    }
    if (!this.formData.province.trim()) {
      alert('Province/State is required.');
      return;
    }
 if (!this.formData.phone.trim()) {
      alert('Phone is required.');
      return;
    }

    if (!this.formData.country.trim()) {
      alert('Country is required.');
      return;
    }
    if (!this.formData.Tshirt) {
      alert('Tshirt size is required.');
      return;
    }

      if (!this.formData.HoodieSize) {
      alert('Hoodie size is required.');
      return;
    }
    if (this.formData.foodAllergies === 'Yes' && !this.formData.allergyDetails.trim()) {
      alert('Please provide details for your food allergies + reactions.');
      return;
    }

    // Enviar con emailjs
    emailjs.sendForm(
      'service_17rvjoc',
      'template_69n0l2q',
      event.target as HTMLFormElement,
      'HchgGW9DNC9989hVy'
    ).then(
      result => {
        console.log('Form submitted successfully', result.text);
        alert('Form submitted successfully.Please check your spam or junk folder if you don’t see our email (vwe.canada@gmail.com).To avoid missing future emails, please mark this email as Not Spam.');
        this.closeForm();
      },
      error => {
        console.error('Form submission error', error.text);
        alert('There was an error submitting the form.');
      }
    );
  }

}
