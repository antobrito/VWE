import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-testimonial',                      // Selector del componente
  standalone: true,                                 // Componente autónomo
  imports: [CommonModule],                          // Importación del módulo común para *ngFor, *ngIf, etc.
  templateUrl: './testimonial.component.html',      // Archivo de plantilla HTML
  styleUrl: './testimonial.component.css'           // Archivo de estilos CSS
})
export class TestimonialComponent implements AfterViewInit {

  constructor(private platform: Platform) {}        // Se inyecta Platform para verificar si está en navegador

  private carousel: any;                            // Referencia al carrusel de Bootstrap
  selectedItem: any = null;                         // Elemento seleccionado para mostrar en el modal

  // Lista de testimonios organizados por slides (cada slide puede tener 1 o 2 testimonios)
  testimonials = [
    {
      items: [
        { 
          image: 'assets/img/nikkivwe.png',
          text: 'The VWE workshop was the most profound, life-changing experience I have ever had!',
          name: 'Nikki Bee Williams',
          role: 'Florida - USA',
          extraInfo: false,
          longComment: 'The VWE workshop completely changed my life...'
        },
        {
          image: 'assets/img/alecVWE.png',
          text: 'At the VWE seminar, I was able to see without my eyes...',
          name: 'Alec Figueroa',
          role: 'Washington - USA',
          extraInfo: false,
          longComment: ''
        }
      ]
    },
    {
      items: [
        {
          image: 'assets/img/heidiVWE.png',
          text: 'VWE has been one of the most ❤️‍🩹 healing experiences I have ever had...',
          name: 'Heidi Maynard',
          role: 'Kansas - USA',
          extraInfo: false,
          longComment: ''
        },
        {
          image: 'assets/img/katherVWE.png',
          text: 'Rob’s approach to VWE is all about play and curiosity...',
          name: 'Katherine',
          role: 'Minnesota - USA',
          extraInfo: true,
          longComment: 'VWE brings people together...'
        }
      ]
    },
    {
      items: [
        {
          image: 'assets/img/logo testimonial.png',
          text: 'Alex Stefan (the Hypnotherapist)...',
          name: 'Chad',
          role: 'Minnesota - USA',
          extraInfo: true,
          longComment: 'I found the tonality and pacing...'
        },
        {
          image: 'assets/img/victoriaVWE.png',
          text: 'Attending VWE for the second time has been nothing short of transformative.',
          name: 'Victoria Makris',
          role: 'Florida - USA',
          extraInfo: true,
          longComment: 'The entire team goes above and beyond...'
        }
      ]
    },
    {
      items: [
        {
          image: 'assets/img/hakim.png',
          text: 'Rob Freemans Vision Without Eyes course was an inspiring...',
          name: 'Hakim Isler',
          role: 'North Carolina - USA',
          extraInfo: true,
          longComment: 'Taking the Vision Without Eyes course with Rob Freeman...'
        }
      ]
    }
  ];

  // Se ejecuta después de que el componente ha sido renderizado
  ngAfterViewInit() {
    if (this.platform.isBrowser) {
      // Se obtiene el elemento del carrusel por ID
      const carouselElement = document.querySelector('#testimonialCarousel');

      if (carouselElement) {
        // Se inicializa el carrusel de Bootstrap con opciones personalizadas
        this.carousel = new (window as any).bootstrap.Carousel(carouselElement, {
          interval: 5000,  // Duración entre slides en milisegundos (5 segundos)
          pause: false,    // No se pausa al pasar el mouse
          wrap: true       // El carrusel se reinicia al llegar al final
        });

        // Se obtiene el modal por ID
        const modalElement = document.getElementById('letterModal');

        // Al mostrar el modal, se pausa el carrusel
        modalElement?.addEventListener('show.bs.modal', () => {
          this.carousel.pause();
        });

        // Al cerrar el modal, se reanuda el carrusel
        modalElement?.addEventListener('hidden.bs.modal', () => {
          this.carousel.cycle();
        });

        // Ajuste adicional para mantener altura constante del carrusel en mobile
        this.setMaxSlideHeight(carouselElement as HTMLElement);
        window.addEventListener('resize', () => this.setMaxSlideHeight(carouselElement as HTMLElement));
      }
    }
  }

  // Función que fuerza al carrusel a tener una altura fija según el slide más alto
  setMaxSlideHeight(carouselElement: HTMLElement) {
    const slideItems = carouselElement.querySelectorAll('.carousel-item');

    let maxHeight = 0;

    slideItems.forEach((item: Element) => {
      (item as HTMLElement).style.height = 'auto'; // Reiniciar altura
      const height = (item as HTMLElement).offsetHeight;
      if (height > maxHeight) {
        maxHeight = height; // Guardar la mayor altura
      }
    });

    // Aplicar la altura máxima a todos los slides
    slideItems.forEach((item: Element) => {
      (item as HTMLElement).style.height = `${maxHeight}px`;
    });

    // También se puede aplicar a .carousel-inner si se desea
    const inner = carouselElement.querySelector('.carousel-inner');
    if (inner) {
      (inner as HTMLElement).style.height = `${maxHeight}px`;
    }
  }

  // Abre el modal con los detalles del testimonio seleccionado
  openModal(item: any) {
    this.selectedItem = item;
  }
}
