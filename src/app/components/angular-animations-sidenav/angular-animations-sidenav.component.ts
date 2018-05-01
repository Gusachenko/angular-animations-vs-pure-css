import { Component, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { SidenavCommonBehaviour } from '../../interfaces/sidenav-common';

@Component({
  selector: 'angular-animations-sidenav',
  templateUrl: './angular-animations-sidenav.component.html',
  styleUrls: ['./angular-animations-sidenav.component.scss'],
  host: {
    class: 'sidenav-component',
    '[@sidenavOpened]': 'opened'
  },
  animations: [
    trigger('sidenavOpened', [
      state(
        'true',
        style({
          transform: 'translateX(0)'
        })
      ),
      state(
        'false',
        style({
          transform: 'translateX(-100%)'
        })
      ),
      transition('false <=> true', animate('.4s cubic-bezier(0.165, 0.84, 0.44, 1)'))
    ])
  ]
})
export class AngularAnimationsSidenavComponent implements AfterViewInit, SidenavCommonBehaviour {
  animationState: 'closed' | 'opened' = 'closed';
  opened = false;

  toggle(isOpen: boolean = !this.opened): void {
    this.opened = isOpen;
  }

  open(): void {
    this.opened = true;
  }

  close(): void {
    this.opened = false;
  }

  constructor() {}

  ngAfterViewInit() {}
}
