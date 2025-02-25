import { Component } from '@angular/core';
import { AfterViewInit , ViewChild} from '@angular/core'; //esto es para manejar el tab

@Component({
  selector: 'app-event-tab',
  standalone: true,
  imports: [],
  templateUrl: './event-tab.component.html',
  styleUrl: './event-tab.component.css'
})
export class EventTabComponent implements AfterViewInit {
  
  constructor() {}

  ngAfterViewInit(): void {
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

  scrollToTab(target: HTMLElement): void {
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onTabClick(tabId: string): void {
    setTimeout(() => {
      const tabElement = document.getElementById(tabId);
      if (tabElement) {
        this.scrollToTab(tabElement);
      }
    }, 300);
  }

}
