import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntryPagePageRoutingModule } from './entry-page-routing.module';

import { EntryPagePage } from './entry-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntryPagePageRoutingModule
  ],
  declarations: [EntryPagePage]
})
export class EntryPagePageModule {}
