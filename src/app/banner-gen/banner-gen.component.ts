import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-gen',         // Selector del componente
  standalone: true,
  imports: [CommonModule],            // Módulos necesarios
  templateUrl: './banner-gen.component.html',  // Ruta al HTML
  styleUrl: './banner-gen.component.css'       // Ruta al CSS
})
export class BannerGenComponent {

  // ✅ Texto que aparecerá en el banner y se repetirá de forma continua
  message: string = "🌟 Don't miss this unique Mount Shasta event! 3-in-1: Telekinesis Activation, Mindsight Training, and UFO Seminar with Skywatches. Aug 9–17, 2025. Reserve now! Details in the 'Upcoming Event' section. ";
}
