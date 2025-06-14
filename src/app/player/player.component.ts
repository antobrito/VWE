import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  audio: HTMLAudioElement | null = null;
  isPlaying = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Crea el objeto de audio
      this.audio = new Audio('assets/music/WVE.mp3');
      this.audio.loop = true;
      this.audio.autoplay = true;

      // Intenta reproducir automáticamente
      this.audio.play().then(() => {
        this.isPlaying = true;
      }).catch(() => {
        console.log('Autoplay bloqueado por el navegador');
      });

      // Detiene este audio si otro comienza a reproducirse
      this.monitorOtherAudio();
    }
  }

  play(): void {
    if (this.audio) {
      this.pauseOtherAudios();
      this.audio.play();
      this.isPlaying = true;
    }
  }

  pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.isPlaying = false;
    }
  }

  pauseOtherAudios(): void {
    const audios = document.querySelectorAll('audio');
    audios.forEach(el => {
      if (el !== this.audio) el.pause();
    });
  }

  monitorOtherAudio(): void {
    document.addEventListener('play', (e: any) => {
      if (this.audio && e.target !== this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
        this.isPlaying = false;
      }
    }, true);
  }
}
