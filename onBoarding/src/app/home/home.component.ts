import { Component } from '@angular/core';
import { EscenaComponent } from './escena/escena.component';
import { StepsService } from '../services/steps.service';
import { IStep } from '../models/i-step';


@Component({
  selector: 'app-home',
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  steps: IStep[] = [];

  constructor(private stepsService: StepsService){}

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();
  }

}
