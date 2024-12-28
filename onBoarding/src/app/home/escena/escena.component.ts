import { Component, Input } from '@angular/core';
import { IStep } from '../../models/i-step';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrls: ['./escena.component.scss'],
  animations: [
    trigger('elegantSlide', [
      // Avanzar 
      transition(':increment', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      // Retroceder 
      transition(':decrement', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('800ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class EscenaComponent {
  @Input() receivedSteps: IStep[] = [];
  currentStep: number = 0;

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--; 
    }
  }

  nextStep() {
    if (this.currentStep < this.receivedSteps.length - 1) {
      this.currentStep++; 
    }
  }

  showStep(index: number) {
    this.currentStep = index; 
  }
}


