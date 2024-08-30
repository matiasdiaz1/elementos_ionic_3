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
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'alertas',
    loadChildren: () => import('./pages/alertas/alertas.module').then( m => m.AlertasPageModule)
  },
  
  {
    path: 'botones',
    loadChildren: () => import('./pages/botones/botones.module').then( m => m.BotonesPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
