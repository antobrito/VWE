import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Seminar } from '../seminar-gallery/seminar-gallery.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-seminar-detail-dialog',
    standalone: true,
  imports: [
    MatCardModule,    // Para <mat-card> y <mat-card-actions>
    MatButtonModule,  // Para <button mat-button>
  ],
  templateUrl: './seminar-detail-dialog.component.html',
  styleUrls: ['./seminar-detail-dialog.component.css'],
})
export class SeminarDetailDialogComponent {
  // Inyectamos referencia al diálogo y los datos que llegan del componente padre
  constructor(
    public dialogRef: MatDialogRef<SeminarDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Seminar
  ) {}

  // Método para cerrar la modal
  close(): void {
    this.dialogRef.close();
  }
}
