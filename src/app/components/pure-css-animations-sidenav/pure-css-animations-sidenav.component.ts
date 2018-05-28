import {
  Component,
  AfterViewInit,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { SidenavCommonBehaviour } from '../../interfaces/sidenav-common';

@Component({
  selector: 'pure-css-animations-sidenav',
  templateUrl: './pure-css-animations-sidenav.component.html',
  styleUrls: ['./pure-css-animations-sidenav.component.scss'],
  host: {
    class: 'sidenav-component',
    '[class.visible]': 'opened'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureCssAnimationsSidenavComponent implements AfterViewInit, SidenavCommonBehaviour {
  opened = false;
  isAnimationDone = true;

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
    this.ref.detectChanges();
  }

  animationStart(event?): void {
    this.isAnimationDone = false;
    this.ref.detectChanges();
  }

  private initMutationObserver() {
    // Select the node that will be observed for mutations
    var targetNode = this.elementRef.nativeElement;
    // Options for the observer (which mutations to observe)
    var config: MutationObserverInit = {
      attributes: true,
      childList: true,
      characterData: true,
      characterDataOldValue: true,
      attributeOldValue: true
    };
    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(this.checkMutation);
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
  }

  checkMutation(mutationRecords?: MutationRecord[]): void {
    console.log(mutationRecords);
  }

  constructor(private elementRef: ElementRef, private ref: ChangeDetectorRef) {
    ref.detach();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener('transitionend', event => {
      this.animationDone(event);
    });

    this.initMutationObserver();
  }
}
