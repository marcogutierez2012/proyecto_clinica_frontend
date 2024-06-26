import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './usuario/lista/lista.component';
import { RegistroComponent } from './usuario/registro/registro.component';

const routes: Routes = [
  {
    path: 'lista-usuario',
    component: ListaComponent,
    pathMatch : 'full'
  },
  {
    path: 'registro-usuario',
    component: RegistroComponent,
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
