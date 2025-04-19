import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
          role: 'Kansas - USA', 
          extraInfo: false,
          longComment: ''
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
    },

    {
      items: [
        { 
          image: 'assets/img/logo testimonial.png', 
          text: 'Alex Stefan (the Hypnotherapist) approach to meditation and hypnosis made it easier to shift out of my analytical mind and into a more open, intuitive space. ', 
          name: 'Chad ', 
          role: 'Minnesota - USA', 
          extraInfo: true,
          longComment: 'I found the tonality and pacing of Alex during the meditations/hypnosis/journeying to be of the utmost help to getting into the mental frame work necessary to believe in something I have not experienced yet. Getting past mental blocks(out of the left brain) and into heart coherence and the right brain seem to be the door into which many great achievements into the unknown and supernatural are found. Dalia took the time to understand each person’s strengths and challenges, making her guidance feel personal and impactful.This seminar aimed directly at this and I can only imagine that it will get better with every new seminar as the insights and innovations of the trainers evolves. Dahlia demonstrated this effortlessly as she aimed to work with as many of us as she could on an individual basis throughout the week, each time using new ideas and insights tailored to our individual strengths and obstacles.'
        },
        { 
          image: 'assets/img/victoriaVWE.png', 
          text: 'Attending VWE for the second time has been nothing short of transformative. ', 
          name: 'Victoria Makris', 
          role: 'Florida - USA', 
          extraInfo: true,
          longComment: 'The entire team goes above and beyond to create an event that is both immersive and filled with joy—it’s evident that this is truly a labor of love. My mindsight has opened even more, and I’ve gained priceless connections. Thank you, Rob and team, for yet another unforgettable experience!'
        }
      ]
    },

    {
      items: [
        { 
          image: 'assets/img/hakim.png', 
          text: 'Rob Freemans Vision Without Eyes course was an inspiring and transformative experience can’t wait to go back for more. ', 
          name: 'Hakim Isler ', 
          role: 'North Carolina - USA ', 
          extraInfo: true,
          longComment: 'Taking the Vision Without Eyes course with Rob Freeman was a powerful and eye opening experience. Rob has a calm and grounded presence that immediately puts you at ease. He was incredibly patient, clear in his guidance, and genuinely passionate about helping each of us succeed. His ability to motivate while keeping the space light and focused made the learning process both fun and impactful. I walked away with real skills, a deeper understanding of Mindsight, and a strong desire to continue training. I highly recommend this course to anyone interested in exploring their inner potential in a supportive, well structured environment.'
        }
      ]
    },
  ];

  ngAfterViewInit() {
    // Check if we're in a browser environment before accessing the DOM
    if (this.platform.isBrowser) {
      // Select the carousel element from the DOM using its ID
      const carouselElement = document.querySelector('#testimonialCarousel');
      
      if (carouselElement) {
        // Initialize the Bootstrap Carousel if the element is found, with custom options
        this.carousel = new (window as any).bootstrap.Carousel(carouselElement, {
          interval: 5000,  // Set the interval between slides to 5000ms (5 seconds)
          pause: false,    // Carousel will not pause on hover
          wrap: true       // Carousel will cycle continuously (wrap around to the first slide)
        });
  
        // Select the modal element by its ID
        const modalElement = document.getElementById('letterModal');
  
        // Add event listener for when the modal is shown
        modalElement?.addEventListener('show.bs.modal', () => {
          // Pause the carousel when the modal is displayed
          this.carousel.pause();
        });
  
        // Add event listener for when the modal is hidden
        modalElement?.addEventListener('hidden.bs.modal', () => {
          // Resume the carousel when the modal is hidden
          this.carousel.cycle();
        });
      }
    }
  }

  openModal(item: any) {
    this.selectedItem = item;
  }
}
