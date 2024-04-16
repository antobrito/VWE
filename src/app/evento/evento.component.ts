
// npm install @fortawesome/angular-fontawesome

import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { faSearch,faBell,faUser} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [FontAwesomeModule ],
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.css'
})
export class EventoComponent {

  faSearch = faSearch;
  faBell =faBell;
  faUser = faUser;
}
