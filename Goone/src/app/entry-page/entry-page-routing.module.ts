import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryPagePage } from './entry-page.page';

const routes: Routes = [
  {
    path: '',
    component: EntryPagePage
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryPagePageRoutingModule {}
