import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarTareaComponent } from './agregar-tarea/agregar-tarea.component';
import { ModificarTareaComponent } from './modificar-tarea/modificar-tarea.component';
import { BorrarTareaComponent } from './borrar-tarea/borrar-tarea.component';
import { RecursosCompartidosModule } from '../recursos-compartidos/recursos-compartidos.module';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FormsModule } from '@angular/forms';
import { ListarTareasComponent } from './listar-tareas/listar-tareas.component';

@NgModule({
  declarations: [
    AgregarTareaComponent,
    ModificarTareaComponent,
    BorrarTareaComponent,
    PaginaPrincipalComponent,
    ListarTareasComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecursosCompartidosModule
  ],
  exports: [
    PaginaPrincipalComponent
  ]
})
export class TareasModule { }
