import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { PureComponent } from '../../class/component';

@Component({
  selector: `*[pure-text]`,
  exportAs: 'pureText',
  template: '<ng-content></ng-content>',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureText extends PureComponent {
  constructor(el: ElementRef) {
    super(el, ['pure-text']);
  }
}
