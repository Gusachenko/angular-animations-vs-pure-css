import { Component, AfterViewInit } from '@angular/core';

import { SidenavCommonBehaviour } from '../../interfaces/sidenav-common';

@Component({
  selector: 'angular-animations-sidenav',
  templateUrl: './angular-animations-sidenav.component.html',
  styleUrls: ['./angular-animations-sidenav.component.scss'],
  host: {
    '[class.visible]': 'opened'
  }
})
export class AngularAnimationsSidenavComponent implements AfterViewInit, SidenavCommonBehaviour {
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
