import { Component, Input } from '@angular/core';
import { Tarea } from '../interfaces/tarea.interface';
import { TareasService } from '../tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: './agregar-tarea.component.html',
  styleUrls: ['./agregar-tarea.component.css']
})
export class AgregarTareaComponent {

  ids: number[] = [];

  generarID(): number {
    let repetida = true;
    let id = -1
    do {
      id = Math.floor(Math.random() * 1000000);
      if(!this.ids.some(idEnArray => idEnArray == id)) {
        this.ids.push(id)
        repetida = false;
      }
    } while(repetida);
    return id;
  }

  @Input() nuevaTarea: Tarea = {
    id: -1,
    titulo: "",
    descripcion: ""
  }

  constructor(private tareasService:TareasService) { }

  agregarTarea() {
    if((this.nuevaTarea.titulo != "") && (this.nuevaTarea.descripcion != "")) {
      let id = this.generarID();
      this.nuevaTarea.id = id;
      this.tareasService.agregarTarea(this.nuevaTarea);  
  
      this.nuevaTarea = {
        id: -1,
        titulo: "",
        descripcion: ""
      }
    }
  
  }

}
