import { Component, OnInit } from '@angular/core';
import { BenefitsService } from '../benefits/benefits.service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent implements OnInit  {


 
  pageTitle: string = "Blindfolded Practice";
  
  imagePath: string = ""; // Single centered image

  benefits = [
    { title: "Enhance Focus", description: "Train your mind to stay sharp and focused in any situation." },
    { title: "Improve Intuition", description: "Develop a deeper connection with your inner self." },
    { title: "Strengthen Perception", description: "Expand your ability to perceive beyond the ordinary senses." }
  ];
  constructor(private benefitService: BenefitsService) {}

  ngOnInit(): void {
    this.pageTitle = this.benefitService.getPageTitle();
    this.benefits = this.benefitService.getBenefits();
   
  }
}
