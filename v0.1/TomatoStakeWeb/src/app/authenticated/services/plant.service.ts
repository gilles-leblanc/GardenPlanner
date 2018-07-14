import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import { Plant } from '../plant';

@Injectable()
export class PlantService {
  private plantsUrl = 'api/plants';

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.plantsUrl);
  }

  create(name: string): void {
    // make http call
  }

  update(): void {

  }

  delete(id: number): void {

  }

  addPlantToBorder(): void {

  }
}
