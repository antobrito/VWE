import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './home/home.component';

import { VideosComponent } from './videos/videos.component';
import { TeamComponent } from './team/team.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventoComponent } from './evento/evento.component';
import { FooterComponent } from './footer/footer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SafeUrlPipe } from './safe-url.pipe';
import { ClasesComponent } from './clases/clases.component';
import { DividerComponent } from './divider/divider.component';
import { PlayerComponent } from './player/player.component';
import { SomeClassesComponent } from './some-classes/some-classes.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { DemonstratorsComponent } from './demonstrators/demonstrators.component';

import { EventTabComponent} from './event-tab/event-tab.component';
import { BannerGenComponent } from './banner-gen/banner-gen.component';
import { TestimonialComponent } from "./testimonial/testimonial.component";
import { NextEventsComponent } from './next-events/next-events.component'; 
import {ContactComponent} from './contact/contact.component'   // Asegurate de usar el path correcto
import {SeminarGalleryComponent} from './seminar-gallery/seminar-gallery.component'

import {  inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent, HomeComponent, VideosComponent, TeamComponent,
    WelcomeComponent, EventoComponent, FooterComponent, ClasesComponent, DividerComponent, PlayerComponent, DemonstratorsComponent,
    SomeClassesComponent, BenefitsComponent, DemonstratorsComponent, EventTabComponent, BannerGenComponent, TestimonialComponent,
    NextEventsComponent, ContactComponent,SeminarGalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

   private title = inject(Title);
  private meta = inject(Meta);


  //title = 'VWE';

 

   // esto es para CEO

     constructor() {
    this.title.setTitle('Vision Without Eyes – Official Site');
    this.meta.updateTag({
      name: 'description',
      content: 'Train your mental energy and awaken your mindsight. Join Rob Freeman’s official Vision Wothout Eyes telekinesis and mindsight seminars.'
    });
  }


 
}




