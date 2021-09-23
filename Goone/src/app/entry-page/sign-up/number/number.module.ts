import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NumberPageRoutingModule } from './number-routing.module';

import { NumberPage } from './number.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NumberPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [NumberPage]
})
export class NumberPageModule {}
