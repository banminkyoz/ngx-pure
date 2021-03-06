import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';
import { PureComponent } from '../../class/component';

const BUTTON_HOST_ATTRIBUTES = [
  'pure-button',
  'pure-flat-button',
  'pure-raised-button',
  'pure-stroked-button',
  'pure-button-round'
];

@Component({
  selector: `button[pure-button], button[pure-flat-button], button[pure-raised-button], button[pure-stroked-button], button[pure-round-button],
             a[pure-button], a[pure-flat-button], a[pure-raised-button], a[pure-stroked-button], a[pure-round-button]`,
  exportAs: 'pureButton',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureButton extends PureComponent {

  readonly isIconButton: boolean = this.hasHostAttribute('pure-icon-button');

  constructor(el: ElementRef) {
    super(el, BUTTON_HOST_ATTRIBUTES);
  }
}
