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
        title: 'Guest Demonstrator',
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
        title: 'Guest Demonstrator',
        imageUrl: 'assets/img/dany.jpeg',
        description: 'Seeing without eyes feels like navigating the world through intuition, where perception goes beyond sight and understanding comes from a deeper place within.',
      },
      // Add more demonstrators as needed
    ];
  }

}
