import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'botones',
    loadChildren: () => import('./pages/botones/botones.module').then(m => m.BotonesPageModule)
  },
  {
    path: 'alertas',
    loadChildren: () => import('./pages/alertas/alertas.module').then(m => m.AlertasPageModule)
  },
  {
    path: 'seccionpro',
    loadChildren: () => import('./pages/seccionpro/seccionpro.module').then(m => m.SeccionproPageModule)
  },
  {
    path: 'serviciopro',
    loadChildren: () => import('./pages/serviciopro/serviciopro.module').then(m => m.ServicioproPageModule)
  },
  {
    path: 'restablecer-contrasena',
    loadChildren: () => import('./pages/restablecer-contrasena/restablecer-contrasena.module').then(m => m.RestablecerContrasenaPageModule)
  },
  {
    path: 'seccionalum',
    loadChildren: () => import('./pages/seccionalum/seccionalum.module').then(m => m.SeccionalumPageModule)
  },
  {
    path: 'servicioalum',
    loadChildren: () => import('./pages/servicioalum/servicioalum.module').then(m => m.ServicioalumPageModule)
  },
  {
    path: '**', 
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
