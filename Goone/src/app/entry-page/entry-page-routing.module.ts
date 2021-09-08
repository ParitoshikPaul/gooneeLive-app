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
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'passcode-verification',
    loadChildren: () => import('./passcode-verification/passcode-verification.module').then( m => m.PasscodeVerificationPageModule)
  },  {
    path: 'password-changed',
    loadChildren: () => import('./password-changed/password-changed.module').then( m => m.PasswordChangedPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntryPagePageRoutingModule {}
