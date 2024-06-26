import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { VideosComponent } from './videos/videos.component';
import { TeamComponent } from './team/team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventoComponent } from './evento/evento.component';
import { FooterComponent } from './footer/footer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SafeUrlPipe } from './safe-url.pipe';
import { ClasesComponent } from './clases/clases.component';
import { DividerComponent } from './divider/divider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenubarComponent,HomeComponent,CarruselComponent,VideosComponent,TeamComponent,
           WelcomeComponent,EventoComponent,FooterComponent,ClasesComponent,DividerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VWE';
}
