import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetComentariosComponent } from './get-comentarios/get-comentarios.component';
import { PushEventosComponent } from './push-eventos/push-eventos.component';
import { PushNoticiasComponent } from './push-noticias/push-noticias.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{
  path:'comentarios',
  component:GetComentariosComponent
},
{
  path:'eventos',
  component:PushEventosComponent
},
{
  path:'noticias',
  component:PushNoticiasComponent
},
{
  path:'home',
  component:HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
