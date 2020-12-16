import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidemenuPageRoutingModule } from './slidemenu-routing.module';

import { SlidemenuPage } from './slidemenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidemenuPageRoutingModule
  ],
  declarations: [SlidemenuPage]
})
export class SlidemenuPageModule {}
