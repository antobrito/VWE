import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css'
})
export class TestimonialComponent implements AfterViewInit {

  constructor(private platform: Platform) {}
  private carousel: any;
  selectedItem: any = null;
  testimonials = [
    {
      items: [
        { 
          image: 'assets/img/nikkivwe.png', 
          text: 'The VWE workshop was the most profound, life-changing experience I have ever had!', 
          name: 'Nikki Bee Williams', 
          role: 'Florida - USA', 
          extraInfo: false,
          longComment: 'The VWE workshop completely changed my life. The experience was beyond anything I could have imagined. I met amazing people and learned incredible skills that have helped me in so many ways.'
        },
        { 
          image: 'assets/img/alecVWE.png', 
          text: 'At the VWE seminar, I was able to see without my eyes, even though I had eye patches and a blindfold on. By the end, I could clearly see shapes and contrast from the environment around me. One of my favorite weeks ever!', 
          name: 'Alec Figueroa', 
          role: 'Washington - USA', 
          extraInfo: false,
          longComment: ''
        }
      ]
    },
    {
      items: [
        { 
          image: 'assets/img/heidiVWE.png', 
          text: 'VWE has been one of the most ❤️‍🩹 healing experiences I have ever had. The energy from everyone especially Rob was just beaming with care and genuine love for all.', 
          name: 'Heidi Maynard', 
          role: '', 
          extraInfo: false,
          longComment: 'Kansas - USA'
        },
        { 
          image: 'assets/img/katherVWE.png', 
          text: 'Rob’s approach to VWE is all about play and curiosity. I love that he partners with amazing, authentic teachers to help guide students during his seminars as an added bonus - thank you', 
          name: 'Katherine', 
          role: 'Minnesota - USA', 
          extraInfo: true,
                    longComment: 'VWE brings people together to learn and grow in ways that are so enriching, fun, and supportive. Having the right people in roles for teaching, demonstrating, and offering guidance is critical for me, because I value having authentic, kind, and quality people as teachers. There are so many to thank! Rob has done a great job of creating an environment where people feel comfortable being themselves and encouraged everyone of us to PLAY! His teaching style flows, is always open to suggestions, and many students are empowered because their ideas instantly got to be tried out by the group. It is refreshing to see collaborative thinking, and the students in my opinion, excel because someone believes in them. Anyone seeking to know more about VWE will be amazed by the loving community of students and teachers who really care about being themselves, are open to new possibilities, and are willing to become more!'
        }
      ]
    }
  ];
 

  ngAfterViewInit() {
    const carouselElement = document.querySelector('#testimonialCarousel');
    if (typeof document !== 'undefined') {
      const carouselElement = document.querySelector('#testimonialCarousel');

    if (carouselElement) {
      this.carousel = new (window as any).bootstrap.Carousel(carouselElement, {
        interval: 5000,
        pause: false,
        wrap: true
      });

      const modalElement = document.getElementById('letterModal');

      modalElement?.addEventListener('show.bs.modal', () => {
        this.carousel.pause();
      });

      modalElement?.addEventListener('hidden.bs.modal', () => {
        this.carousel.cycle();
      });
    }
  }
}

  openModal(item: any) {
    this.selectedItem = item;
  }
}
