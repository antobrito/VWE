import {
  Component,              // Decorador para definir el componente
  ElementRef,              // Permite referenciar elementos del DOM
  ViewChild,               // Para capturar referencias a elementos en la plantilla
  AfterViewInit,           // Hook de Angular para después de inicializar la vista
  HostListener             // Permite escuchar eventos globales como resize
} from '@angular/core';

import { CommonModule } from '@angular/common';          // Módulo común de Angular
import { MatCardModule } from '@angular/material/card';  // Módulo de Angular Material para tarjetas
import { MatDialogModule, MatDialog } from '@angular/material/dialog'; // Para usar diálogos
import { MatButtonModule } from '@angular/material/button';            // Botones de Angular Material
import { MatIconModule } from '@angular/material/icon';                // Íconos de Angular Material
import { SeminarDetailDialogComponent } from './seminar-detail-dialog.component'; // Componente de detalle

// Definición de la interfaz Seminar
export interface Seminar {
  title: string;         // Título general del seminario
  seminarName: string;   // Nombre específico del seminario (nuevo campo)
  location: string;      // Ubicación del seminario
  comment: string;       // Comentario sobre el seminario
  description: string;   // Descripción del seminario
  image: string;         // Ruta a la imagen del seminario
  videos: string[];      // Lista de videos asociados
  startDate: Date;       // Fecha de inicio
  endDate: Date;         // Fecha de fin
}

@Component({
  selector: 'app-seminar-gallery',          // Selector para usar el componente en el HTML
  standalone: true,                         // Componente independiente
  imports: [                                // Módulos importados para el componente
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    SeminarDetailDialogComponent
  ],
  templateUrl: './seminar-gallery.component.html', // Plantilla HTML del componente
  styleUrls: ['./seminar-gallery.component.css']   // Estilos CSS del componente
})
export class SeminarGalleryComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>; // Referencia al carrusel

  showArrows = false; // Indica si se deben mostrar las flechas

  // Lista de seminarios
  seminars: Seminar[] = [
    {
      title: 'Benmiller VWE - Summer',
      seminarName: 'See Beyond the Eyes Seminar',   // Nombre del seminario
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
      description: 'This valuable experience empowered attendees to harness the strength of inner vision. The seminar focused on awakening mental clarity, self-trust, and the hidden power of perception',
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
      description: 'An inspiring seminar where participants awakened their inner eye and expanded their perception beyond the visible world. The experience was further enriched by powerful exercises in telekinesis, designed to train the mind, enhance concentration, and unlock untapped mental abilities',
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

  constructor(private dialog: MatDialog) {} // Inyecta el servicio de diálogo

  ngAfterViewInit() {
    this.checkScrollNeeded(); // Llama a la función que evalúa si mostrar flechas
  }

  @HostListener('window:resize') // Escucha el evento de redimensionar ventana
  onResize() {
    this.checkScrollNeeded();    // Recalcula si se necesitan flechas
  }

  checkScrollNeeded() {
    if (!this.carousel) return;  // Si no hay carrusel, termina
    const container = this.carousel.nativeElement;    // Referencia al elemento DOM
    const totalScrollWidth = container.scrollWidth;   // Ancho total (con scroll)
    const visibleWidth = container.clientWidth;       // Ancho visible
    this.showArrows = totalScrollWidth > visibleWidth + 16; // Determina si se necesitan flechas
    container.style.justifyContent = this.showArrows ? 'flex-start' : 'center'; // Ajusta alineación
  }

  openSeminarDetail(seminar: Seminar) {
    this.dialog.open(SeminarDetailDialogComponent, { // Abre el diálogo de detalle
      width: '95vw',
      maxWidth: '900px',
      data: seminar
    });
  }

  scrollLeft() {
    if (!this.carousel) return;  // Si no hay carrusel, no hace nada
    const card = this.carousel.nativeElement.querySelector('.seminar-card-wrapper'); // Obtiene un card
    const cardWidth = card ? card.clientWidth + 16 : 320; // Calcula ancho + gap
    this.carousel.nativeElement.scrollBy({ left: -cardWidth, behavior: 'smooth' }); // Desplaza a la izquierda
  }

  scrollRight() {
    if (!this.carousel) return;
    const card = this.carousel.nativeElement.querySelector('.seminar-card-wrapper');
    const cardWidth = card ? card.clientWidth + 16 : 320;
    this.carousel.nativeElement.scrollBy({ left: cardWidth, behavior: 'smooth' }); // Desplaza a la derecha
  }
}
