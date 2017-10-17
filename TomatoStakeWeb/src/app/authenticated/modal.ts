// Base class for components that support modal windows

import { HostListener } from '@angular/core';

export class ModalHandler {
  isModalVisible: boolean;
  
  openModal(): void {
    this.isModalVisible = true;
  }  

  closeModal(): void {
    this.isModalVisible = false;
  }

  @HostListener('window:keydown', ['$event'])
  keyboardInput(event: KeyboardEvent) {
    this.closeModal();
  }
}