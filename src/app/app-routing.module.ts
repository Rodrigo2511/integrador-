import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro',
    pathMatch: 'full'
  },
  
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'restaurante',
    loadChildren: () => import('./restaurante/restaurante.module').then( m => m.RestaurantePageModule)
  },
  {
    path: 'restaurante2',
    loadChildren: () => import('./restaurante2/restaurante2.module').then( m => m.Restaurante2PageModule)
  },
  {
    path: 'restaurante3',
    loadChildren: () => import('./restaurante3/restaurante3.module').then( m => m.Restaurante3PageModule)
  },
  {
    path: 'restaurante4',
    loadChildren: () => import('./restaurante4/restaurante4.module').then( m => m.Restaurante4PageModule)
  },
  {
    path: 'restaurante5',
    loadChildren: () => import('./restaurante5/restaurante5.module').then( m => m.Restaurante5PageModule)
  },
  {
    path: 'img',
    loadChildren: () => import('./img/img.module').then( m => m.IMGPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
