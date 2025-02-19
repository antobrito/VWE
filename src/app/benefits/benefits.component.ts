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

  pageTitle: string = '';
  benefits: any[] = [];
  imagePaths: string[] = [];

  constructor(private benefitService: BenefitsService) {}

  ngOnInit(): void {
    this.pageTitle = this.benefitService.getPageTitle();
    this.benefits = this.benefitService.getBenefits();
    this.imagePaths = this.benefitService.getImagePaths();
  }
}
