// The plants and borders component which displays the user's garden borders and plants

import { Component, OnInit } from '@angular/core';

import { ModalHandler } from '../modal';
import { Plant } from '../plant';
import { Border } from '../border';

import { PlantDisplayRowComponent } from './plant-display-row.component';
import { PlantEditRowComponent } from './plant-edit-row.component';

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
  duplicateName: string;
  selectedId: number;

  constructor(private alertService: AlertService,
              private plantService: PlantService,
              private borderService: BorderService) {
    super();
    this.unselectPlant();
    this.registerModal('border');
    this.registerModal('addBorder');
  }

  ngOnInit(): void {
    this.getPlants();
    this.getBorders();
  }

  getPlants(): void {
    this.plants = this.plantService.getPlants();
  }

  onSelected(id: number) {
    this.selectedId = id;
  }

  onCancelled(newPlant: boolean) {
    this.unselectPlant();

    if (newPlant) {
      this.plants = this.plants.filter(p => p.id !== 0);
    }
  }

  onSaved(plant: Plant) {
    this.unselectPlant();
  }

  // editPlant(id: number): void {
  //   this.selectedId = id;
  //   this.plantService.update();
  // }

  onDeleted(plant: Plant): void {
    this.plantService.delete(plant.id);
    this.plants = this.plants.filter(x => x !== plant);
  }

  onAddPlantToBorder(plantId: number) {
    this.openModal('addBorder');
  }

  addBorderToPlant() {
    this.plantService.addPlantToBorder();
    this.closeModal();
  }

  getBorders(): void {
    this.borders = this.borderService.getBorders();
  }

  addPlant(): void {
    // we only allow one new plant row at a time
    // before we create a new plant row we must check if there isn't already a pre-existing one
    if (!this.plants.some(p => p.id === 0)) {
      const newPlant = new Plant();
      newPlant.id = 0;
      this.plants.push(newPlant);
      this.selectedId = 0;
    }
  }

  addBorder(name: string): void {
    // validate that the location name isn't empty
    name = name.trim();
    if (!name) { return; }

    // validate that the location name doesn't already exists
    if (this.borders.some(x => x.name == name)) {
      this.duplicateName = name;
      return;
    }

    this.duplicateName = '';
    this.borderService.create(name);
    this.closeModal();
  }

  closeWindow(): void {
    this.closeModal();
    this.duplicateName = '';
  }

  private unselectPlant() {
    this.selectedId = -1;
  }
}
