import { ElementRef } from "@angular/core";

export class PureComponent {
  constructor(private elementRef: ElementRef, private attributes: string[]) {
    for (const attr of attributes) {
      if (this.hasHostAttribute(attr)) {
        (this.elementRef.nativeElement as HTMLElement).classList.add(attr);
      }
    }
  }

  hasHostAttribute(...attributes: string[]): boolean {
    return attributes.some(attribute => this.elementRef.nativeElement.hasAttribute(attribute));
  }
}
