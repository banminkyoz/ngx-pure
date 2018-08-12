import { Component, ElementRef, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { PureComponent } from '../../class/component';

@Component({
  selector: 'pure-toolbar, pure-header-toolbar, pure-footer-toolbar',
  exportAs: 'pureToolbar',
  template: '<ng-content></ng-content>',
  styleUrls: ['./toolbar.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureToolbar {
  constructor(private el: ElementRef) {
    const nativeElement: any = (this.el.nativeElement as HTMLElement);
    nativeElement.classList.add(nativeElement.tagName.toLowerCase());

    // Check if the parent position's style is relative, absolute or fixed.
    // If not, set default for it as relative. So the pure-header-toolbar & pure-footer-toolbar with work properly
    const tagName = nativeElement.tagName.toLowerCase();
    const parent = nativeElement.parentNode;

    if ((tagName === 'pure-header-toolbar' || tagName === 'pure-footer-toolbar') &&
      parent.style.position !== 'relative' && parent.style.position !== 'absolute' && parent.style.position !== 'fixed') {
        parent.style.position = 'relative';
    }
  }
}
