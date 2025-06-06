import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-gen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-gen.component.html',
  styleUrl: './banner-gen.component.css'
})
export class BannerGenComponent implements AfterViewInit {

  message: string = "🌟 Don't miss this unique Mount Shasta event! 3-in-1: Telekinesis Activation, Mindsight Training, and UFO Seminar with Skywatches. Aug 9–17, 2025. Reserve now! Details in the 'Upcoming Event' section.";

  @ViewChild('scrollText', { static: false }) scrollText!: ElementRef<HTMLSpanElement>;

  ngAfterViewInit(): void {
    // Asegurarse de que el elemento y su contenedor existen
    const el = this.scrollText.nativeElement;
    const container = el.parentElement!;
    
    // Calcular ancho del texto y del contenedor
    const messageWidth = el.offsetWidth;
    const containerWidth = container.offsetWidth;

    // Calcular distancia total y duración de la animación
    const distance = messageWidth + containerWidth;
    const speed = 100; // píxeles por segundo
    const duration = distance / speed;

    // Aplicar las variables CSS
    el.style.setProperty('--scroll-distance', `${distance}px`);
    el.style.setProperty('--scroll-duration', `${duration}s`);
  }
}
