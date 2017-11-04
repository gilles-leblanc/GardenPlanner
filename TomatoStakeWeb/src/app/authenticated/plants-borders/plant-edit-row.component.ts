import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Plant } from '../plant';

@Component({
  selector: 'tr.plant-edit-row',
  templateUrl: './plant-edit-row.component.html',
  styles: [`.clickable { cursor: pointer; } `]
})
export class PlantEditRowComponent {
  @Input() plant: Plant;
  @Output() onCancelled = new EventEmitter();
  @Output() onSaved = new EventEmitter<Plant>();

  cancelEdit() {
    this.onCancelled.emit(this.plant.id === 0);
  }

  save(plant: Plant) {
    this.onSaved.emit(plant);
  }
}