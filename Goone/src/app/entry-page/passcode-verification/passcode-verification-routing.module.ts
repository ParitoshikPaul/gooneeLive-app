import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasscodeVerificationPage } from './passcode-verification.page';

const routes: Routes = [
  {
    path: '',
    component: PasscodeVerificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasscodeVerificationPageRoutingModule {}
