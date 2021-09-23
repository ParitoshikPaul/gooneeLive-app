import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./entry-page/entry-page.module').then(m => m.EntryPagePageModule)
    loadChildren: () => import('./entry-page/splash/splash.module').then(m => m.SplashPageModule)
  }
  ,
  {
    path: 'intro',
    loadChildren: () => import('./entry-page/intro/intro.module').then( m => m.IntroPageModule),
    canLoad:[IntroGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./entry-page/welcome/welcome.module').then( m => m.WelcomePageModule),
    canLoad:[IntroGuard]
  },
  {
    path: 'splash',
    loadChildren: () => import('./entry-page/splash/splash.module').then( m => m.SplashPageModule),
    canLoad:[IntroGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./entry-page/login/login.module').then( m => m.LoginPageModule),
    canLoad:[AuthGuard, AutoLoginGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./entry-page/sign-up/sign-up.module').then( m => m.SignUpPageModule),
    canLoad:[AuthGuard, AutoLoginGuard]
  },
  {
    path: 'forgot',
    loadChildren: () => import('./entry-page/forgot/forgot.module').then( m => m.ForgotPageModule),
    canLoad:[AuthGuard, AutoLoginGuard]
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./entry-page/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule),
    canLoad:[AuthGuard]
  },
  {
    path: 'passcode-verification',
    loadChildren: () => import('./entry-page/passcode-verification/passcode-verification.module').then( m => m.PasscodeVerificationPageModule),
    canLoad:[AuthGuard]
  },
  {
    path: 'number',
    loadChildren: () => import('./entry-page/sign-up/number/number.module').then( m => m.NumberPageModule),
    canLoad:[AuthGuard]
  },
  {
    path: 'password',
    loadChildren: () => import('./entry-page/sign-up/password/password.module').then( m => m.PasswordPageModule),
    canLoad:[AuthGuard]
  } ,
  {
    path: 'password-changed',
    loadChildren: () => import('./entry-page/password-changed/password-changed.module').then( m => m.PasswordChangedPageModule),
    canLoad:[AuthGuard]
  } 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
