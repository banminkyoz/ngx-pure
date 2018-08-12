import { Component, ViewEncapsulation, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { PureComponent } from '../../class/component';

@Component({
  selector: `div[pure-container], article[pure-container], section[pure-container], 
             header[pure-container], footer[pure-container], form[pure-container]`,
  exportAs: 'pureContainer',
  template: '<ng-content></ng-content>',
  styles: [],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureContainer extends PureComponent {
  constructor(el: ElementRef) {
    super(el, ['pure-container']);
  }
}
