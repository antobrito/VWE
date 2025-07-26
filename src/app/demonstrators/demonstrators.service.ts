import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DemonstratorsService {

  // Create an array of demonstrators, which contains text and image information
  getDemonstrators() {
    return [
      {
        name: 'Dalia Burgoin',
        title: 'Guest DeGuest Demonstrator / Trainer',
        imageUrl: 'assets/img/daly.JPG',
        description: 'We don\'t need to try and gain the ability to see without eyes, because we already have it. We need only to expand our perception and belief about our ability',
      },
      {
        name: 'Alex Stefan',
        title: 'Guest Certified Hypnotherapist',
        imageUrl: 'assets/img/alex.jpg',
        description: '"Is this real? Or has this been happening inside my head?” “Of course it is happening inside your head, but why on earth should that mean that it is not real?"',
      },
      {
        name: 'Daniela Gonzalez Brito',
        title: 'Guest Demonstrator / Trainer',
        imageUrl: 'assets/img/dany.jpeg',
        description: 'Seeing without eyes feels like navigating the world through intuition, where perception goes beyond sight and understanding comes from a deeper place within.',
      },
      // Add more demonstrators as needed
      {
        name: 'Nikki Bee Williams ',
        title: 'Guest Demonstrator / Trainer',
        imageUrl: 'assets/img/nikki.png',
        description: 'Seeing without eyes is a superpower— one that opens the door to even greater abilities. When we expand our perception, we unlock the limitless potential of the mind.',
      },
       {
        name: 'Amanda DeFrancesco ',
        title: 'Guest Demonstrator / Trainer',
        imageUrl: 'assets/img/amanda.webp',
        description: "Mindsight isn't something you acquire...it's a deep inner seeing that awakens when you remember who you truly are.",
      },
    ];
  }

}
