import { Component, Input } from '@angular/core';

import { Plant } from '../plant';

@Component({
  selector: 'tr.plant-edit-row',
  templateUrl: './plant-edit-row.component.html',
  styles: [`.clickable { cursor: pointer; } `]
})
export class PlantEditRowComponent {
  @Input() plant: Plant;
  // @Output() onToggleEdit = new EventEmitter<any>();
}