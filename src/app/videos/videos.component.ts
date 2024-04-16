import { Component, OnInit } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

import {SafeUrlPipe} from '../safe-url.pipe'



@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent  {


      // An array of cards for the carousel
      cards = [
        [{ imgUrl:'https://www.youtube.com/embed/Y8Pfc71Os68?si=X3tisk1eNueRlQs5', title: 'Card 1', description: 'Description of Card 1' },
        { imgUrl: 'https://www.youtube.com/embed/XBSmE5dShYg?si=lnRwFzXN3MPpFHgj', title: 'Card 2', description: 'Description of Card 2' },
        { imgUrl: 'https://www.youtube.com/embed/86lrdommwN4?si=Ub74IXmoTlHQ0Fbl', title: 'Card 3', description: 'Description of Card 3' },
        { imgUrl: 'https://www.youtube.com/embed/jHN5s0F993M?si=BvlgwNO5oVJw0Rxc', title: 'Card 4', description: 'Description of Card 4' },
        { imgUrl: 'https://www.youtube.com/embed/RKwx1oc5ezI?si=Q7gjZdN_kwY-txP5', title: 'Card 5', description: 'Description of Card 5' }
      ],
      [{ imgUrl: 'https://www.youtube.com/embed/nNo01ZYt8U8?si=gc-lSYLoPCK34UzT', title: 'Card 6', description: 'Description of Card 1' },
      { imgUrl: 'https://www.youtube.com/embed/puuCDk1RUas?si=rLOODvm0grsr8stH', title: 'Card 7', description: 'Description of Card 2' },
      { imgUrl: 'https://www.youtube.com/embed/QtYTAWDL7hE?si=gJ1Rlr3P9wCnQx6Y', title: 'Card 8', description: 'Description of Card 3' },
      { imgUrl: 'https://via.placeholder.com/150', title: 'Card 9', description: 'Description of Card 4' },
      { imgUrl: 'https://via.placeholder.com/150', title: 'Card 10', description: 'Description of Card 5' }
    ],
    [{ imgUrl: 'https://via.placeholder.com/150', title: 'Card 11', description: 'Description of Card 1' },
    { imgUrl: 'https://via.placeholder.com/150', title: 'Card 12', description: 'Description of Card 2' },
    { imgUrl: 'https://via.placeholder.com/150', title: 'Card 13', description: 'Description of Card 3' },
    { imgUrl: 'https://via.placeholder.com/150', title: 'Card 14', description: 'Description of Card 4' },
    { imgUrl: 'https://via.placeholder.com/150', title: 'Card 15', description: 'Description of Card 5' }
    ]
    ];

    
    constructor() {}

    ngOnInit(): void {
      
   // Initialization logic if needed
    }


}
