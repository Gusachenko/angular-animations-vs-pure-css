export interface SidenavCommonBehaviour {
  opened: boolean;
  isAnimationDone: boolean;
  open(): void;
  close(): void;
  animationStart(): void;
  animationDone(): void;
  toggle(isOpen: boolean): void;
}
