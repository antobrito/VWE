
import { Component, OnInit } from '@angular/core';
import { DemonstratorsService } from './demonstrators.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngFor
@Component({
  selector: 'app-demonstrators',
  templateUrl: './demonstrators.component.html',  // Ensure this is correct
  styleUrls: ['./demonstrators.component.css'],  // Ensure this is correct
  standalone: true,  // Mark the component as standalone
  imports: [CommonModule],  // Import CommonModule for ngFor
})
export class DemonstratorsComponent implements OnInit {
  demonstrators: any[] = [];

  constructor(private demonstratorsService: DemonstratorsService) {}

  ngOnInit(): void {
    this.demonstrators = this.demonstratorsService.getDemonstrators();
  }

}


