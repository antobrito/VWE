import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-gen',
  standalone: true,
  imports: [CommonModule], // Importaciones necesarias para componentes básicos
  templateUrl: './banner-gen.component.html',
  styleUrl: './banner-gen.component.css'
})
export class BannerGenComponent {

  longText: string; 
  reserve: string;
  
  constructor() {
    const message = 'Dont miss this unique experience at Mount Shasta! 3 events in one. Join the Telekinesis Activaction seminar , the Mindsight training seminar and the captivating UFO Phenomena seminar including Sky Watch. 9th - 15th August 2025. Secure Your Spot Today!';
    const filler = ' - '.repeat(2); // Espacios en blanco para crear distancia
   
    this.longText = (message + filler).repeat(1); // Repite el mensaje 10 veces para que sea largo
    // this.reserve = 'Details very soon!   VWE'
    this.reserve = 'Details in the "Upcoming Event" section.'
  }
}


