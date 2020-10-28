import { NgModule } from '@angular/core';
import { FiltroTareasPipe } from './filtro-tareas.pipe';


@NgModule({
  declarations: [FiltroTareasPipe],
  exports: [FiltroTareasPipe]
})
export class PipesModule { }
