import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { VideosComponent } from './videos/videos.component';
import { TeamComponent } from './team/team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventoComponent } from './evento/evento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarComponent,HomeComponent,CarruselComponent,VideosComponent,TeamComponent,
           WelcomeComponent,EventoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VWE';
}
