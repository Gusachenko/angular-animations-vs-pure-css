import { Component, AfterViewInit, ElementRef } from '@angular/core';

import { SidenavCommonBehaviour } from '../../interfaces/sidenav-common';

@Component({
  selector: 'pure-css-animations-sidenav',
  templateUrl: './pure-css-animations-sidenav.component.html',
  styleUrls: ['./pure-css-animations-sidenav.component.scss'],
  host: {
    class: 'sidenav-component',
    '[class.visible]': 'opened'
  }
})
export class PureCssAnimationsSidenavComponent implements AfterViewInit, SidenavCommonBehaviour {
  opened = false;
  isAnimationDone = false;

  toggle(isOpen: boolean = !this.opened): void {
    this.opened = isOpen;

    //hack for detect transitionstart event, need to fix
    this.animationStart();
  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }

  animationDone(event?): void {
    this.isAnimationDone = true;
  }

  animationStart(event?): void {
    this.isAnimationDone = false;
  }

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener('transitionend', event => {
      this.animationDone(event);
    });
  }
}
