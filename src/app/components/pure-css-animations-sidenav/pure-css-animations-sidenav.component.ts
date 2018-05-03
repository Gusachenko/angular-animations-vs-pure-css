import { Component, AfterViewInit } from '@angular/core';

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
