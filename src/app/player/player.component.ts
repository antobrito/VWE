import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {

  audio: HTMLAudioElement | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    // Check if the platform is a browser
    if (isPlatformBrowser(this.platformId)) {
      this.audio = new Audio('assets/your_music_file.mp3'); // Replace with your audio file path
    }
  }

  play(): void {
    this.audio?.play();
  }

  pause(): void {
    this.audio?.pause();
  }

  stop(): void {
    this.audio?.pause();
    if (this.audio) {
      this.audio.currentTime = 0; // Reset to the beginning
    }
  }

  yourMethod() {
    console.log('Button clicked!');
    // Add your logic here
  }
  
}