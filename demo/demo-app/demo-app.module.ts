import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoApp } from './demo-app.component';
import { DemoRoutingModule } from './demo-app.routing';

import { PureButtonModule } from 'src/components/button/button.module';
import { PureTextModule } from 'src/components/text/text.module';
import { PureContainerModule } from 'src/components/container/container.module';
import { PureToolbarModule } from 'src/components/toolbar/toolbar.module';

import { TextDemo } from '../demos/text/text';
import { ContainerDemo } from '../demos/container/container';
import { ButtonDemo } from '../demos/button/button';
import { ToolbarDemo } from '../demos/toolbar/toolbar';

@NgModule({
  declarations: [
    DemoApp,
    // Demos
    ButtonDemo,
    ContainerDemo,
    TextDemo,
    ToolbarDemo
  ],
  imports: [
    BrowserModule,
    DemoRoutingModule,
    // Component Modules
    PureButtonModule,
    PureContainerModule,
    PureTextModule,
    PureToolbarModule
  ],
  providers: [],
  bootstrap: [DemoApp]
})
export class DemoAppModule { }
