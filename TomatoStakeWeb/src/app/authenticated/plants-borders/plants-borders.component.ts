// The plants and borders component which displays the user's garden borders and plants

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'plants-borders',
  templateUrl: './plants-borders.component.html',
  // styleUrls: [ './landing.component.css' ]
})
export class PlantsBordersComponent {
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



// // Modals

// var $html = document.documentElement;
// var $modals = getAll('.modal');
// var $modalButtons = getAll('.modal-button');
// var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button');

// if ($modalButtons.length > 0) {    
//     $modalButtons.forEach(function ($el) {        
//         $el.addEventListener('click', function () {
//             var target = $el.dataset.target;
//             var $target = document.getElementById(target);
//             $html.classList.add('is-clipped');
//             $target.classList.add('is-active');
//         });
//     });
// }

// if ($modalCloses.length > 0) {
//     $modalCloses.forEach(function ($el) {
//         $el.addEventListener('click', function () {
//             closeModals();
//         });
//     });
// }

// document.addEventListener('keydown', function (event) {
//     var e = event || window.event;
//     if (e.keyCode === 27) {
//         closeModals();
//         closeDropdowns();
//     }
// });

// function closeModals() {
//     $html.classList.remove('is-clipped');
//     $modals.forEach(function ($el) {
//         $el.classList.remove('is-active');
//     });
// }


// // Functions

// function getAll(selector) {
//     return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
// }