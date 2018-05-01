export interface SidenavCommonBehaviour {
  opened: boolean;
  open(): void;
  close(): void;
  toggle(isOpen: boolean): void;
}
