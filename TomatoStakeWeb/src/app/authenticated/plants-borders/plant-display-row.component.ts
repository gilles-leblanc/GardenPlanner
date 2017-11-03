import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Plant } from '../plant';

@Component({
  selector: 'tr.plant-display-row',
  templateUrl: './plant-display-row.component.html',
  styles: [`.clickable { cursor: pointer; } `]
})
export class PlantDisplayRowComponent {
  @Input() plant: Plant;
  @Output() onSelected = new EventEmitter<number>();
  // @Output() onToggleEdit = new EventEmitter<any>();

  editPlant(id: number): void {
    this.onSelected.emit(id);
  }
}