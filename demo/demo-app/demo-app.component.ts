import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.scss']
})
export class DemoApp {
  title = 'app';
  menuItems = [
    {name: 'Button', route: '/button'},
    {name: 'Container', route: '/container'},
    {name: 'Text', route: '/text'}
  ];
}
