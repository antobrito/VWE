import { signal } from '@angular/core';

// Signal para saber si el modal está abierto
export const isEventModalOpen = signal(false);

// Función para abrir el modal
export function openEventModal() {
  isEventModalOpen.set(true);
}

// Función para cerrar el modal
export function closeEventModal() {
  isEventModalOpen.set(false);
}
