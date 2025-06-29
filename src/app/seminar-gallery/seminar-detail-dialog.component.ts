import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Seminar } from './seminar-gallery.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common'; // ✅ Necesario para *ngFor y más

@Component({
  selector: 'app-seminar-detail-dialog',
  standalone: true,
  imports: [
     CommonModule,       // ✅ IMPORTANTE
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './seminar-detail-dialog.component.html',
  styleUrls: ['./seminar-detail-dialog.component.css']
})
export class SeminarDetailDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SeminarDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Seminar
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
