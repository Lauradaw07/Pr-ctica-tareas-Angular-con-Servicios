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

}
