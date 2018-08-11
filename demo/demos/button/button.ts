import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'button-demo',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDemo {
  constructor() { }

}
