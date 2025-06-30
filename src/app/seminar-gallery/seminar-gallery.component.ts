import {
  Component,              // Decorador para definir el componente
  ElementRef,              // Permite referenciar elementos del DOM
  ViewChild,               // Para capturar referencias a elementos en la plantilla
  AfterViewInit,           // Hook de Angular que se ejecuta después de inicializar la vista
  HostListener             // Permite escuchar eventos globales, como el resize
} from '@angular/core';

import { CommonModule } from '@angular/common';          // Módulo común de Angular
import { MatCardModule } from '@angular/material/card';  // Módulo de tarjetas de Angular Material
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; // Diálogo de Angular Material
import { MatButtonModule } from '@angular/material/button';            // Botones de Angular Material
import { MatIconModule } from '@angular/material/icon';                // Íconos de Angular Material
import { SeminarDetailDialogComponent } from './seminar-detail-dialog.component'; // Componente de detalle

// Definición de la interfaz Seminar para tipar los datos
export interface Seminar {
  title: string;         // Título general del seminario
  seminarName: string;   // Nombre específico del seminario
  location: string;      // Ubicación del seminario
  comment: string;       // Comentario enriquecido del seminario
  description: string;   // Descripción resumida del seminario
  image: string;         // Ruta de la imagen asociada
  videos: string[];      // Lista de videos asociados
  startDate: Date;       // Fecha de inicio del seminario
  endDate: Date;         // Fecha de fin del seminario
}

@Component({
  selector: 'app-seminar-gallery',            // Selector del componente
  standalone: true,                           // Indica que es un componente standalone
  imports: [                                  // Módulos importados necesarios
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    SeminarDetailDialogComponent
  ],
  templateUrl: './seminar-gallery.component.html', // Plantilla HTML
  styleUrls: ['./seminar-gallery.component.css']   // Estilos CSS
})
export class SeminarGalleryComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>; // Referencia al carrusel en el DOM

  showArrows = false; // Indica si las flechas deben mostrarse

  // Lista de seminarios
  seminars: Seminar[] = [
    {
      title: 'Benmiller VWE - Summer',
      seminarName: 'See Beyond the Eyes Seminar',
      location: 'Ontario, Canada',
      comment: 'An empowering journey that expanded participants’ intuitive and mental abilities. With the dedication and expertise of demonstrators Daniela and Claudia, and under the expert guidance of Rob as lead instructor, this seminar was a transformative experience. Participants strengthened their confidence, focus, and intuitive skills, learning to see beyond the physical and develop true mindsight.',
      description: 'During this impactful seminar, participants strengthened their confidence, focus, and intuitive skills. They learned to see beyond the physical, discovering the potential of their mind and developing true mindsight.',
      image: 'assets/img/BenmillerS1.jpeg',
      videos: [
        'assets/seminars/orlando-vid1.mp4',
        'assets/seminars/orlando-vid2.mp4',
        'assets/seminars/orlando-vid3.mp4'
      ],
      startDate: new Date('2024-06-10'),
      endDate: new Date('2024-06-15')
    },
    {
      title: 'Benmiller VWE - Fall',
      seminarName: 'The Power of Inner Sight Seminar',
      location: 'Ontario, Canada',
      comment: 'Days of remarkable discoveries where participants learned to perceive the world in unconventional ways. Thanks to the support and knowledge of Claudia, alongside Rob’s leadership as lead instructor, attendees experienced an enriching seminar that empowered them to awaken inner vision, achieve mental clarity, and trust their deeper perception.',
      description: 'This valuable experience empowered attendees to harness the strength of inner vision. The seminar focused on awakening mental clarity, self-trust, and the hidden power of perception.',
      image: 'assets/img/BenmillerS2.jpeg',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      startDate: new Date('2024-09-29'),
      endDate: new Date('2024-10-04')
    },
    {
      title: 'Orlando VWE',
      seminarName: 'Awaken Your Inner Eye Seminar',
      location: 'Orlando, FL, USA',
      comment: 'A truly enriching experience that inspired attendees to unlock the strength of their inner vision. With the valuable guidance of demonstrators and instructors Daniela and Dalia, and Alex’s remarkable telekinesis expertise, this seminar provided an inspiring journey. Participants trained their minds, enhanced concentration, and expanded perception beyond the visible, all with Rob’s expert support.',
      description: 'An inspiring seminar where participants awakened their inner eye and expanded their perception beyond the visible world. The experience was further enriched by powerful exercises in telekinesis, designed to train the mind, enhance concentration, and unlock untapped mental abilities.',
      image: 'assets/img/orlando.png',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      startDate: new Date('2025-01-27'),
      endDate: new Date('2025-02-01')
    },
    {
      title: 'London VWE',
      seminarName: 'The Art of Seeing Without Eyes Seminar',
      location: 'Ontario, Canada',
      comment: 'A dynamic seminar focused on enhancing perception through mental discipline. Dalia and Nikki guided participants through an immersive exploration of mindsight and non-visual perception. With Alex’s telekinesis expertise and Rob’s expert support, attendees deepened their mental focus, enhanced intuitive awareness, and gained confidence in sensing the world beyond sight.',
      description: 'Hosted amid the peaceful surroundings of the VWE headquarters in London, Ontario, this exceptional seminar challenged participants to go beyond traditional perception. Through unique practices, they enhanced their mindsight, deepened their focus, and built confidence in non-visual ways of sensing the world.',
      image: 'assets/img/london.jpeg',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      startDate: new Date('2025-05-05'),
      endDate: new Date('2025-05-10')
    }
  ];

  constructor(private dialog: MatDialog) {} // Constructor inyectando el servicio de diálogo

  ngAfterViewInit() {
    this.checkScrollNeeded(); // Al inicializar la vista, verificamos si se necesitan flechas
  }

  @HostListener('window:resize') // Escucha el evento resize
  onResize() {
    this.checkScrollNeeded();    // Recalcula si las flechas son necesarias al cambiar el tamaño
  }

  checkScrollNeeded() {
    if (!this.carousel) return;  // Si no existe el carrusel, termina
    const container = this.carousel.nativeElement;  // Obtiene el elemento del carrusel
    const totalScrollWidth = container.scrollWidth; // Ancho total del scroll
    const visibleWidth = container.clientWidth;     // Ancho visible (viewport)
    this.showArrows = totalScrollWidth > visibleWidth + 16; // Determina si hay overflow horizontal
    container.style.justifyContent = this.showArrows ? 'flex-start' : 'center'; // Ajusta alineación
  }

  openSeminarDetail(seminar: Seminar) {
    this.dialog.open(SeminarDetailDialogComponent, { // Abre el diálogo con los datos del seminario
      width: '95vw',          // Ancho relativo a la pantalla
      maxWidth: '900px',      // Ancho máximo
      data: seminar           // Pasa los datos del seminario al diálogo
    });
  }

  scrollLeft() {
    if (!this.carousel) return; // Si no hay carrusel, no hace nada
    const container = this.carousel.nativeElement; // Referencia al carrusel
    const card = container.querySelector('.seminar-card-wrapper'); // Obtiene un card
    const cardWidth = card ? card.clientWidth + 16 : 320; // Calcula ancho del card + margen
    const newScrollLeft = Math.max(container.scrollLeft - cardWidth, 0); // No permite scroll negativo
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' }); // Realiza el scroll suave
  }

  scrollRight() {
    if (!this.carousel) return; // Si no hay carrusel, no hace nada
    const container = this.carousel.nativeElement; // Referencia al carrusel
    const card = container.querySelector('.seminar-card-wrapper'); // Obtiene un card
    const cardWidth = card ? card.clientWidth + 16 : 320; // Calcula ancho del card + margen
    const maxScrollLeft = container.scrollWidth - container.clientWidth; // Límite de scroll
    const newScrollLeft = Math.min(container.scrollLeft + cardWidth, maxScrollLeft); // No sobrepasa límite
    container.scrollTo({ left: newScrollLeft, behavior: 'smooth' }); // Realiza el scroll suave
  }
}
