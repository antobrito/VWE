// Componente principal que muestra una galería de seminarios como tarjetas
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SeminarDetailDialogComponent } from './seminar-detail-dialog.component';

// Interfaz que define la estructura de cada seminario
export interface Seminar {
  title: string;
  location: string;
  comment: string;
  description: string;
  image: string;
  videos: string[];
}

@Component({
  selector: 'app-seminar-gallery',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    SeminarDetailDialogComponent ,// Se importa el diálogo para ver detalles
  ],
  templateUrl: './seminar-gallery.component.html',
  styleUrls: ['./seminar-gallery.component.css']
})
export class SeminarGalleryComponent {
  // Arreglo con los datos de los seminarios
  seminars: Seminar[] = [
    {
      title: 'Seminar Orlando 3035',
      location: 'Orlando, FL',
      comment: 'An amazing experience with students.',
      description: 'This seminar focused on leadership and teamwork...',
      image: 'assets/seminars/orlando-main.jpg',
      videos: [
        'assets/seminars/orlando-vid1.mp4',
        'assets/seminars/orlando-vid2.mp4',
        'assets/seminars/orlando-vid3.mp4'
      ]
    }
  ];

  constructor(private dialog: MatDialog) {}

  // Abre el diálogo con los detalles del seminario
    openSeminarDetail(seminar: any) {
    this.dialog.open(SeminarDetailDialogComponent, {
      width: '95vw', // opcional para que sea responsive
      maxWidth: '900px', // si cambio aqui debo ir al css
      data: seminar,
    });
  }

}
