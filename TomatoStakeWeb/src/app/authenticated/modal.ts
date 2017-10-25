// Base class for components that support modal windows

import { HostListener } from '@angular/core';

export class ModalHandler {
  readonly escape_keycode = 27;
  isModalVisible: boolean;
  
  openModal(): void {
    this.isModalVisible = true;
  }  

  closeModal(): void {
    this.isModalVisible = false;
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    if (event.keyCode == this.escape_keycode) {
      this.closeModal();
    }    
  }
}