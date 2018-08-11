import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoApp } from './demo-app.component';
import { DemoRoutingModule } from './demo-app.routing';

import { PureButtonModule } from 'src/components/button/button.module';
import { PureTextModule } from 'src/components/text/text.module';
import { PureContainerModule } from 'src/components/container/container.module';
import { RouterModule } from '../../node_modules/@angular/router';
import { TextDemo } from '../demos/text/text';
import { ContainerDemo } from '../demos/container/container';
import { ButtonDemo } from '../demos/button/button';

@NgModule({
  declarations: [
    DemoApp,
    // Demos
    ButtonDemo,
    ContainerDemo,
    TextDemo
  ],
  imports: [
    BrowserModule,
    DemoRoutingModule,
    // Components
    PureButtonModule,
    PureContainerModule,
    PureTextModule
  ],
  providers: [],
  bootstrap: [DemoApp]
})
export class DemoAppModule { }
