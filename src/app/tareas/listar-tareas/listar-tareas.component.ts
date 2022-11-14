import { Component, EventEmitter, Output } from '@angular/core';
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

  editarTarea(tarea: Tarea) {
    console.log('editar',tarea);
    
  }

  tacharTarea() {    
    let descripcion = document.querySelector(".descripcionTarea");
    descripcion?.classList?.toggle("tachar");
  }

  eliminarTarea(tarea: Tarea): void {
    this.tareasService.eliminarTarea(tarea);
  }

}
