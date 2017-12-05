// Base class for components that support modal windows

import { HostListener } from '@angular/core';

class ModalDialog {
  name: string;
  visible: boolean;

  constructor(name: string) {
    this.name = name;
    this.visible = false;
  }
}

export class ModalHandler {
  readonly escape_keycode = 27;
  private modalDialogs: ModalDialog[];

  constructor() {
    this.modalDialogs = [];
  }

  registerModal(name: string) {
    this.modalDialogs.push(new ModalDialog(name));
  }

  // specify the modal we want to open using it's id
  openModal(name: string): void {
    this.closeAllModals();
    this.modalDialogs.find(m => m.name === name).visible = true;
  }

  // returns wether a specified modal is currently visible
  isVisible(name: string): boolean {
    return this.modalDialogs.some(m => m.name === name && m.visible === true);
  }

  // We can only have one modal active at a time so there is no need to pass to id of the modal to close
  // we just close them all
  closeModal(): void {
    this.closeAllModals();
  }

  private closeAllModals(): void {
    this.modalDialogs.forEach(m => m.visible = false);
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.keyCode === this.escape_keycode) {
      this.closeModal();
    }
  }
}
