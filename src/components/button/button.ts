import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef } from '@angular/core';
import { PureComponent } from '../../class/component';

const BUTTON_HOST_ATTRIBUTES = [
  'pure-button',
  'pure-button-round'
];

@Component({
  selector: `button[pure-button], button[pure-raised-button], button[pure-round-button]`,
  exportAs: 'pureButton',
  host: {
    '[disabled]': 'disabled || null'
  },
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  inputs: ['disabled', 'color'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureButton extends PureComponent implements OnInit {

  readonly isRoundButton: boolean = this.hasHostAttribute('pure-round-button');
  readonly isIconButton: boolean = this.hasHostAttribute('pure-icon-button');

  constructor(el: ElementRef) {
    super(el, BUTTON_HOST_ATTRIBUTES);
  }

  ngOnInit(): void { }
}
