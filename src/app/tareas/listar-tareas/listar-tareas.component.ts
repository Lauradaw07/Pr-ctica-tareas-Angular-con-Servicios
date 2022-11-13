import { Component } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Tarea } from '../interfaces/tarea.interface';

@Component({
  selector: 'app-listar-tareas',
  templateUrl: './listar-tareas.component.html',
  styleUrls: ['./listar-tareas.component.css']
})
export class ListarTareasComponent {

  constructor(private tareasService: TareasService) { }

  tareas: Tarea[] = this.tareasService.tareas;

}
