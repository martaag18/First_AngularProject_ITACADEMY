import { Injectable } from '@angular/core';
import { IStep } from '../models/i-step';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  private steps: IStep[] = [

    {
      title: "Dedica moltes hores",
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaràs una millora ràpidament.',
      img: 'assets/step1.svg',
      bgcolor: '#b3e5fc', // Azul claro
    },
    {
      title: 'Programa projectes propis',
      description: 'Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.',
      img: 'assets/step2.svg',
      bgcolor: '#e0e0e0', // Gris claro
    },
    {
      title: 'Procura descansar',
      description: 'Descansar bé i desconnectar són vitals. D\'aquesta manera reduiràs l\'estrès i l\'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge.',
      img: 'assets/step3.svg',
      bgcolor: '#fff9c4', // Amarillo claro
    },
  ];

  getSteps(): IStep[] {
    return this.steps;
  }

  constructor() { }
}
