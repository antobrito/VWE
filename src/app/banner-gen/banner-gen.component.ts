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
    const message = "Don't miss this unique Mount Shasta event! 3-in-1: Telekinesis Activation, Mindsight Training, and UFO Seminar with Skywatches. Aug 9–17, 2025. Reserve now!";
    const filler = ' - '.repeat(1); // Espacios en blanco para crear distancia
   
    this.longText = (message + filler).repeat(1); // Repite el mensaje 10 veces para que sea largo
    // this.reserve = 'Details very soon!   VWE'
    this.reserve = 'Details in the "Upcoming Event" section.'
  }
}


