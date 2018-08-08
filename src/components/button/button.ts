import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ElementRef, Input } from '@angular/core';
import { PureComponent } from '../../class/component';

const BUTTON_HOST_ATTRIBUTES = [
  'pure-button',
  'pure-button-round'
];

@Component({
  selector: `button[pure-button], button[pure-raised-button], button[pure-round-button],
             a[pure-button], a[pure-raised-button], a[pure-round-button]`,
  exportAs: 'pureButton',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureButton extends PureComponent implements OnInit {

  readonly isIconButton: boolean = this.hasHostAttribute('pure-icon-button');

  @Input() disabled = false;

  constructor(el: ElementRef) {
    super(el, BUTTON_HOST_ATTRIBUTES);
  }

  ngOnInit(): void { }
}
