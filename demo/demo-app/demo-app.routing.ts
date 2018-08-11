import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ButtonDemo } from '../demos/button/button';
import { ContainerDemo } from '../demos/container/container';
import { TextDemo } from '../demos/text/text';

const routes: Routes = [
  { path: 'button', component: ButtonDemo },
  { path: 'container', component: ContainerDemo },
  { path: 'text', component: TextDemo }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
