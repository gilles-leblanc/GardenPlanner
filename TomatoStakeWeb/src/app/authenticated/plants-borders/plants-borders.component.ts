// The plants and borders component which displays the user's garden borders and plants

import { Component, OnInit } from '@angular/core';

import { ModalHandler } from '../modal';
import { Plant } from '../plant';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'plants-borders',
  templateUrl: './plants-borders.component.html',
  // styleUrls: [ './landing.component.css' ]
})
export class PlantsBordersComponent extends ModalHandler implements OnInit  {
  plants: Plant[];

  constructor(private plantService: PlantService) { 
    super();
  }

  getPlants(): void {
    this.plants = this.plantService.getPlants();
    // this.plantService.getPlants().then(plants => this.plants = plants);
  }

  ngOnInit(): void {
    this.getPlants();
  }
}
