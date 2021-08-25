import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./entry-page/entry-page.module').then(m => m.EntryPagePageModule)
  }
  // ,
  // {
  //   path: 'intro',
  //   loadChildren: () => import('./entry-page/intro/intro.module').then( m => m.IntroPageModule)
  // },
  // {
  //   path: 'layout',
  //   loadChildren: () => import('./entry-page/layout/layout.module').then( m => m.LayoutPageModule)
  // },
  // {
  //   path: 'entry-page',
  //   loadChildren: () => import('./entry-page/entry-page.module').then( m => m.EntryPagePageModule)
  // }   
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
