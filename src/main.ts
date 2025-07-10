import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { NextEventsComponent } from './app/next-events/next-events.component';

bootstrapApplication(NextEventsComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Inicializa Firebase
    provideFirestore(() => getFirestore()), // Provee Firestore para inyección
  ],
}).catch(console.error);
