import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { closeEventModal } from 'src/app/state/modals.state';

@Component({
  selector: 'app-event-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent {
  // Cierra el modal al hacer clic en el botón
  closeModal() {
    closeEventModal();
  }
}
