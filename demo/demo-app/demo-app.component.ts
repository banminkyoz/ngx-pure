import { Component } from '@angular/core';

@Component({
  selector: 'demo-app',
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.scss']
})
export class DemoApp {
  dirState: 'LTR' | 'RTL' = 'LTR';
  menuItems = [
    { name: 'Button', route: '/button' },
    { name: 'Container', route: '/container' },
    { name: 'Text', route: '/text' }
  ];

  changeDirState() {
    this.dirState = this.dirState === 'LTR' ? 'RTL' : 'LTR';
    document.getElementById('demo').setAttribute('dir', this.dirState);
  }

  requestFullscreen() {
    const demo: any = document.getElementById('demo');
    if (demo.requestFullscreen) {
      demo.requestFullscreen();
    } else if (demo.mozRequestFullScreen) { /* Firefox */
      demo.mozRequestFullScreen();
    } else if (demo.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      demo.webkitRequestFullscreen();
    } else if (demo.msRequestFullscreen) { /* IE/Edge */
      demo.msRequestFullscreen();
    }
  }
}
