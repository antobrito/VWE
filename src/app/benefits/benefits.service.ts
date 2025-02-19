// src/app/content.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  constructor() { }

  getBenefits() {
    return [
      {
        title: "Improving Spatial Memory",
        description: "Practicing without sight helps improve spatial memory and the ability to remember locations and objects without relying on vision. This is critical for people with vision loss, who may need to rely on mental maps of their surroundings."
      },
      {
        title: "Increasing Confidence in Mobility",
        description: "Participating in blindfolded activities can help individuals build confidence in their ability to move without seeing. This is helpful for those learning to use canes or guide dogs to navigate independently."
      },
      {
        title: "Fostering Empathy and Awareness",
        description: "Practicing activities blindfolded can help sighted individuals develop greater understanding and empathy for the challenges faced by people with visual impairments. This fosters greater respect and adaptation in society."
      },
      {
        title: "Strengthening Imagination and Creativity",
        description: "Engaging in creative activities like drawing or dancing without seeing can strengthen imagination and creativity, helping to develop new ways of problem-solving or self-expression."
      }
    ];
  }

  getPageTitle() {
    return "Benefits of Practicing Blindfolded";
  }

  getImagePaths() {
    return [
      'assets/img/blindblackboard.png',
    //   'assets/blindfold2.jpg'
    ];
  }
}
