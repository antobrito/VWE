import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',  // Path to footer.component.html
  styleUrls: ['./footer.component.css'],  // Path to footer.component.css
  imports: [CommonModule]
})
export class FooterComponent {
  // Cards Information
  cards = [
    {
      title: 'Find Us',
      icon: 'fas fa-map-marker-alt',
      text: 'Avalon - VWE Property - Ontario - Canada',
      link: 'https://youtu.be/qPPbk1E2vKg' // Link to Google Maps for the location
    },
    {
      title: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      text: '', // Empty text, just the icon will be shown
      link: 'https://wa.me/+15198516450/?text=Hi Rob Freeman. I am interested in some information about the Vision Without Eyes Seminar.' // WhatsApp link (replace with actual number)
    },
    {
      title: 'Mail Us',
      icon: 'far fa-envelope-open',
      text: 'robfreeman@look.ca',
      link: 'mailto:robfreeman@look.ca' // Mailto link
    }
  ];

  // Safe URLs after sanitization
  safeLinks: SafeUrl[] = [];

  constructor(private sanitizer: DomSanitizer) {
    // Sanitize the links to avoid the Angular warning
    this.safeLinks = this.cards.map(card => this.sanitizer.bypassSecurityTrustUrl(card.link));
  }

  currentYear: number = new Date().getFullYear();
}

