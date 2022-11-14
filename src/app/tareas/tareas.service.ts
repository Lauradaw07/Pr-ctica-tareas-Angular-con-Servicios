import { Injectable } from '@angular/core';
import { Tarea } from './interfaces/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  tareas:Tarea[] = [];
  
  agregarTarea(tarea: Tarea) {
    this.tareas.push(tarea);
    console.log(this.tareas);
    
  }

  eliminarTarea(tarea: Tarea) {
    for(let i = 0; i < this.tareas.length; i++) {
      if(this.tareas[i].id == tarea.id) {
        this.tareas.splice(i, 1);
      }
    }
  }

}
