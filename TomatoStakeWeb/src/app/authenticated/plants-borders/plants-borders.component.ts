// The plants and borders component which displays the user's garden borders and plants

import { Component, OnInit } from '@angular/core';

import { ModalHandler } from '../modal';
import { Plant } from '../plant';
import { Border } from '../border';
import { AlertService } from '../../services/alert.service';
import { PlantService } from '../services/plant.service';
import { BorderService } from '../services/border.service';

@Component({
  selector: 'plants-borders',
  templateUrl: './plants-borders.component.html',
})
export class PlantsBordersComponent extends ModalHandler implements OnInit {
  plants: Plant[];
  borders: Border[];
  showDuplicateMessage: boolean;

  constructor(private alertService: AlertService, 
              private plantService: PlantService,
              private borderService: BorderService) { 
    super();
  }

  ngOnInit(): void {
    this.getPlants();
    this.getBorders();
  }

  getPlants(): void {
    this.plants = this.plantService.getPlants();
  }  

  getBorders(): void {
    this.borders = this.borderService.getBorders();
  }

  add(name: string): void {
    // validate that the location name isn't empty
    name = name.trim();
    if (!name) { return; }

    // validate that the location name doesn't already exists
    if (this.borders.some(x => x.name == name)) {
      // this.alertService.alert('test');
      this.showDuplicateMessage = true;
      return;
    }

    this.borderService.create(name);
    this.closeModal();
  }
}
