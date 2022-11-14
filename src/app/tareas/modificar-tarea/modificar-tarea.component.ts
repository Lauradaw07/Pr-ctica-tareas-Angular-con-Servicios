import { Component, Input } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-modificar-tarea',
  templateUrl: './modificar-tarea.component.html',
  styleUrls: ['./modificar-tarea.component.css']
})
export class ModificarTareaComponent {

  constructor(private tareasService:TareasService) { }

  @Input() tareas: Tarea[] = this.tareasService.tareas;

}