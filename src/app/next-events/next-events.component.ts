// Importamos los decoradores y módulos necesarios desde Angular core
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 👈 Importa FormsModule para usar [(ngModel)]
import { Component, OnInit } from '@angular/core'; // 👈 Importamos Component y OnInit
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-next-events', // El selector para usar el componente en otras vistas
  standalone: true, // Se define como componente standalone
  imports: [CommonModule, FormsModule], // Importamos los módulos necesarios
  templateUrl: './next-events.component.html', // Archivo de plantilla
  styleUrls: ['./next-events.component.css'], // Archivo de estilos
})
export class NextEventsComponent implements OnInit {
  // Componente que implementa OnInit

  // Lista original de eventos (puede venir de una API en el futuro)
  events = [
    {
      image: './assets/img/mshasta.png',
      date: new Date(2025, 7, 9), // 28 de mayo de 2025
      event_name: 'An Epic Journey Beyond the Mind and Stars. Mount Shasta, CA, USA',
      location: 'Mount Shasta, CA, USA',
      summary:
        'We present three seminars in one extraordinary experience: Telekinesis, Mindsight, and UFO. Activate your telekinesis and awaken your ability to see without eyes.Explore UFO phenomena and witness the unseen during skywatches at Mt. Shasta.',
    },
    {
      image: './assets/img/orlando 2025.png',
      date: new Date(2025, 10, 21), // 25 de abril de 2025
      event_name: 'Awakening Mindsight and Mental Energy. Orlando, FL, USA',
      location: 'Orlando, FL, USA',
      summary:
        'Designed to awaken and develop two powerful human abilities: mindsight—deep inner vision and mental perception—and mental energy, the capacity to influence the environment through focused intention and mind control, such as telekinesis',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      date: new Date(2025, 1, 10), // 10 de mayo de 2025
      event_name: 'Festival de Música',
      location: 'Parque Central',
      summary:
        'Una celebración musical con artistas locales e internacionales.',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      date: new Date(2025, 1, 25), // Duplicado de conferencia (lo eliminaremos)
      event_name: 'Conferencia de Tecnología',
      location: 'Auditorio Nacional',
      summary: 'Descubre las últimas tendencias tecnológicas.',
    },
  ];

  upcomingEvents: any[] = []; // Aquí se almacenarán solo los eventos futuros y ordenados
  showForm = false; // Controla visibilidad del formulario
  selectedEvent: any = null; // Evento seleccionado para registrarse

  // Modelo del formulario
  formData = {
    event_name: '',
    name: '',
    address: '',
    province: '',
    country: '',
    TypeSize: '',
    email: '',
    phone: '',
    foodAllergies: 'No', // Valor por defecto
    comments: '',
    Tshirt: '', // ← ¡Agregado aquí!
    HoodieSize: '', // ← ¡Agrega esta línea!
  };
  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    const today = new Date();

    // Filtra solo eventos cuya fecha es en el futuro
    const futureEvents = this.events.filter((e) => new Date(e.date) > today);

    // Elimina eventos duplicados (por nombre y fecha) y los ordena por fecha
    const uniqueSortedEvents = futureEvents
      .filter(
        (event, index, self) =>
          index ===
          self.findIndex(
            (e) =>
              e.event_name === event.event_name &&
              e.date.toDateString() === event.date.toDateString()
          )
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Asigna a la lista final de eventos
    this.upcomingEvents = uniqueSortedEvents;
  }

  // Calcula cuántos días faltan para un evento
  getDaysLeft(date: Date): number {
    const now = new Date();
    const eventDate = new Date(date);
    const diff = eventDate.getTime() - now.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

  // Abre el formulario para el evento seleccionado
  openForm(event: any) {
    this.selectedEvent = event;
    this.formData.event_name = event.event_name; // <-- ¡Esto es clave
    //              Si no haces esto, el campo hidden no se llenará, aunque esté en el DOM.!
    this.showForm = true;
  }

  // Cierra el formulario y limpia los datos
  closeForm() {
    this.showForm = false;
    this.formData = {
      event_name: '',
      name: '',
      address: '',
      province: '',
      country: '',
      email: '',
      phone: '',
      foodAllergies: 'No',
      comments: '',
      Tshirt: 'XS',
      HoodieSize: 'XS', // ← ¡Agrega esta línea!
      TypeSize: '',
    };
  }

  submitForm(event: Event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_17rvjoc',
        'template_69n0l2q',
        event.target as HTMLFormElement,
        'HchgGW9DNC9989hVy' // remplaza por tu verdadera public key
      )
      .then(
        (result) => {
          console.log('The form has been submitted successfully.', result.text);
          alert('The form has been submitted successfully.');
          this.closeForm();
        },
        (error) => {
          console.error(
            'There was an error submitting the form. Please review all required fields.',
            error.text
          );
          alert(
            'There was an error submitting the form. Please review all required fields.'
          );
        }
      );
  }
}
