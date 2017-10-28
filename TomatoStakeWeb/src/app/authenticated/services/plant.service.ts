import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Plant } from '../plant';

import { PLANTS } from '../mocks';

@Injectable()
export class PlantService {
  private plantsUrl = 'api/plants';

  constructor(private http: Http) { }

  getPlants(): Plant[] {
    return PLANTS;
  }

  create(name: string): void {
    // make http call
  }

  update(): void {
    
  }

  delete(id: number): void {

  }
}