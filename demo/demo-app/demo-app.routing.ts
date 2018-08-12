import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ButtonDemo } from '../demos/button/button';
import { ContainerDemo } from '../demos/container/container';
import { TextDemo } from '../demos/text/text';
import { ToolbarDemo } from '../demos/toolbar/toolbar';

const routes: Routes = [
  { path: 'button', component: ButtonDemo },
  { path: 'container', component: ContainerDemo },
  { path: 'text', component: TextDemo },
  { path: 'toolbar', component: ToolbarDemo }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
