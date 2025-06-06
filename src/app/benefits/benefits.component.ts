import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  pageTitle: string = "Blindfolded Practice – The Hidden Power of Inner Vision";

  benefits = [
    {
      title: "Enhance Focus",
      description: "Blindfolded training encourages the mind to block out distractions and concentrate solely on the task at hand. This leads to improved mental discipline and sharper concentration over time.",
      image: "assets/img/vwe1.jpg"
    },
    {
      title: "Improve Intuition",
      description: "By reducing reliance on sight, you are guided to trust your instincts and inner voice. This builds a stronger connection to your intuition, helping you make faster, more confident decisions.",
      image: "assets/img/vwe2.jpg"
    },
    {
      title: "Strengthen Perception",
      description: "Engaging in blindfolded practice can awaken dormant senses, sharpening your perception of sound, energy, and spatial awareness. You begin to perceive reality with greater depth.",
      image: "assets/img/vwe3.jpg"
    },
    {
      title: "Boost Memory Retention",
      description: "Training without sight stimulates different parts of the brain, especially those linked to memory. This technique has been used to improve both short-term and long-term memory skills.",
      image: "assets/img/vwe4.png"
    },
    {
      title: "Cultivate Emotional Resilience",
      description: "Facing the discomfort of blindness teaches emotional control. You develop patience, calmness, and the ability to stay grounded in challenging or uncertain situations.",
      image: "assets/img/vwe5.jpg"
    },
    {
      title: "Awaken Inner Vision",
      description: "The ultimate goal of blindfolded work is to go beyond physical sight and activate what some call 'inner vision' or 'mindsight' — a deeper awareness that comes from within.",
      image: "assets/img/vwe6.jpg"
    }
  ];
}
