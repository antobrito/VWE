import { Component, Inject, PLATFORM_ID, AfterViewInit, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-event-tab',
  standalone: true,
  imports: [],
  templateUrl: './event-tab.component.html',
  styleUrl: './event-tab.component.css'
})
export class EventTabComponent implements AfterViewInit {

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
