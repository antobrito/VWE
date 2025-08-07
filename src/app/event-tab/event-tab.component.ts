import { Component, Inject, PLATFORM_ID, AfterViewInit, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-tab',
  standalone: true,
   imports: [CommonModule], // 👈 Agregar aquí for the ngfor
  templateUrl: './event-tab.component.html',
  styleUrl: './event-tab.component.css'
})
export class EventTabComponent implements AfterViewInit {

  cabins = [
    {
      id: 1,
      name: 'Studio Cabin #1: 2 guests - 1 king bed - 1 bath',
      price: 295,
      url: 'https://www.shastaviewlodge.com/cabin1',
      booked: true
    },
    {
      id: 2,
      name: 'Studio Cabin #2: 2 guests - 1 king bed - 1 bath Avaliable',
      price: 295,
      url: 'https://www.shastaviewlodge.com/cabin2',
      booked: true
    },
    {
      id: 3,
      name: 'Studio Cabin #3: 3 guests - 1 bedroom - 1 queen bed and 1 twin bed - 1 bath Avaliable',
      price: 295,
      url: 'https://www.shastaviewlodge.com/cabin3',
      booked: true
    },
    {
      id: 4,
      name: 'Studio Cabin #4: 4 guests - 1 bedroom - 2 queen beds - 1 bath Avaliable',
      price: 295,
      url: 'https://www.shastaviewlodge.com/cabin4',
      booked: true
    },
    {
      id: 5,
      name: 'Studio Cabin #5: 2 guests - 1 king bed - 1 bath Avaliable',
      price: 295,
      url: 'https://www.shastaviewlodge.com/cabin5',
      booked: true
    },
    {
      id: 7,
      name: 'Studio Cabin #7: 7 guests - 2 bedroom - 4 bed - 1 bath - 2 floors Avaliable',
      price: 395,
      url: 'https://www.shastaviewlodge.com/cabin7',
      booked: true
    },
    {
      id: 8,
      name: 'Studio Cabin #8: 2 guests - 1 king bed - 1 bath Avaliable',
      price: 295,
      url: 'https://www.shastaviewlodge.com/cabin8',
      booked: true
    }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const accordion = document.getElementById('accordionFlushExample');
      if (accordion) {
        // Convert HTMLCollection to an array to use the 'for...of' loop
        const collapses = Array.from(accordion.getElementsByClassName('accordion-collapse'));
        for (let collapse of collapses) {
          collapse.addEventListener('shown.bs.collapse', (event: any) => {
            this.scrollToTab(event.target);
          });
        }
      }
    }
  }

  scrollToTab(target: HTMLElement): void {
    if (isPlatformBrowser(this.platformId) && target) {
      setTimeout(() => {
        const rect = target.getBoundingClientRect();
        const offset = 100; // Ajusta este valor según la altura del tab
  
        window.scrollTo({
          top: window.scrollY + rect.top - offset,
          behavior: 'smooth'
        });
      }, 300);
    }
  }

  onTabClick(tabId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const tabElement = document.getElementById(tabId);
        if (tabElement) {
          this.scrollToTab(tabElement);
        }
      }, 300);
    }
  }
}
