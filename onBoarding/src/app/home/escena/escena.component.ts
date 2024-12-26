import { Component, Input } from '@angular/core'; //Input permite a un componente hijo recibir datos desde su componente padre
import { IStep } from '../../models/i-step'; //Importar interfaz
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {

  @Input() receivedSteps: IStep [] = [];
}
