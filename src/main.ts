import { bootstrapApplication } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from './environments/environment';
import { NextEventsComponent } from './app/next-events/next-events.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(NextEventsComponent, {
  providers: [
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase))),
    importProvidersFrom(  provideFirestore(() => getFirestore()))
  ]
}).catch(console.error);
