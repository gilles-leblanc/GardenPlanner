import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Plant } from '../plant';

import { PLANTS } from '../mock-plants';

@Injectable()
export class PlantService {
  private plantsUrl = 'api/plants';  // URL to web api

  constructor(private http: Http) { }

  getPlants(): Plant[] {
    return PLANTS;
  }
  // getPlants(): Promise<Plant[]> {
  //   return this.http.get(this.plantsUrl)
  //              .toPromise()
  //              .then(response => response.json().data as Plant[])
  //              .catch(this.handleError);
  // }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}