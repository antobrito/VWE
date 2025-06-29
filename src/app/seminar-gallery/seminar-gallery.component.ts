import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SeminarDetailDialogComponent } from './seminar-detail-dialog.component';

export interface Seminar {
  title: string;
  location: string;
  comment: string;
  description: string;
  image: string;
  videos: string[];
  date: Date;
}

@Component({
  selector: 'app-seminar-gallery',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    SeminarDetailDialogComponent
  ],
  templateUrl: './seminar-gallery.component.html',
  styleUrls: ['./seminar-gallery.component.css']
})
export class SeminarGalleryComponent implements AfterViewInit {
  @ViewChild('carousel', { static: false }) carousel!: ElementRef<HTMLDivElement>;
  showArrows = false;

  seminars: Seminar[] = [
    {
      title: 'Orlando Seminar 2023',
      location: 'Orlando, FL',
      comment: 'Un seminario inolvidable en Florida.',
      description: 'Exploramos liderazgo, trabajo en equipo y motivación.',
      image: 'assets/img/londonON1.JPG',
      videos: [
        'assets/seminars/orlando-vid1.mp4',
        'assets/seminars/orlando-vid2.mp4',
        'assets/seminars/orlando-vid3.mp4'
      ],
      date: new Date('2023-10-15')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/img/londonON1.JPG',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/img/londonON1.JPG',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/img/londonON1.JPG',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/img/londonON1.JPG',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/seminars/toronto.jpg',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/seminars/toronto.jpg',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/seminars/toronto.jpg',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    },
    {
      title: 'Toronto Youth Summit',
      location: 'Toronto, CA',
      comment: 'Con jóvenes líderes canadienses.',
      description: 'Inspiración, compromiso social y empoderamiento juvenil.',
      image: 'assets/seminars/toronto.jpg',
      videos: [
        'assets/seminars/toronto-vid1.mp4',
        'assets/seminars/toronto-vid2.mp4',
        'assets/seminars/toronto-vid3.mp4'
      ],
      date: new Date('2024-03-05')
    }
  ];

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.checkScrollNeeded();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScrollNeeded();
  }

  checkScrollNeeded() {
    if (!this.carousel) return;

    const container = this.carousel.nativeElement;
    const totalScrollWidth = container.scrollWidth;
    const visibleWidth = container.clientWidth;

    this.showArrows = totalScrollWidth > visibleWidth + 16;
    container.style.justifyContent = this.showArrows ? 'flex-start' : 'center';
  }

  openSeminarDetail(seminar: Seminar) {
    this.dialog.open(SeminarDetailDialogComponent, {
      width: '95vw',
      maxWidth: '900px',
      data: seminar
    });
  }

  scrollLeft() {
    if (!this.carousel) return;
    const card = this.carousel.nativeElement.querySelector('.seminar-card-wrapper');
    const cardWidth = card ? card.clientWidth + 16 : 320;
    this.carousel.nativeElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }

  scrollRight() {
    if (!this.carousel) return;
    const card = this.carousel.nativeElement.querySelector('.seminar-card-wrapper');
    const cardWidth = card ? card.clientWidth + 16 : 320;
    this.carousel.nativeElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}
