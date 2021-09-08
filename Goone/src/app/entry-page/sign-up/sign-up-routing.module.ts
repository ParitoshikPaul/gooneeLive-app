import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  },
  {
    path: 'number',
    loadChildren: () => import('./number/number.module').then( m => m.NumberPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
