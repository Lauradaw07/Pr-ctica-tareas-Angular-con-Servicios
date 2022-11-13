import { Component, Input } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {

  @Input() nuevaTarea: Tarea = {
    titulo: "",
    descripcion: ""
  }

  constructor(private tareasService:TareasService) { }
  
  agregarTarea() {
    this.tareasService.agregarTarea(this.nuevaTarea);  
  }

}
