import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidemenuPage } from './slidemenu.page';

const routes: Routes = [
  {
    path: '',
    component: SlidemenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidemenuPageRoutingModule {}
