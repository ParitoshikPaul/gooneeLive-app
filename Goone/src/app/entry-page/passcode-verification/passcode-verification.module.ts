import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasscodeVerificationPageRoutingModule } from './passcode-verification-routing.module';

import { PasscodeVerificationPage } from './passcode-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasscodeVerificationPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [PasscodeVerificationPage]
})
export class PasscodeVerificationPageModule {}
