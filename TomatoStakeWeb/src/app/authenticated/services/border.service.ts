import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Border } from '../border';

import { BORDERS } from '../mocks';

@Injectable()
export class BorderService {
  private bordersUrl = 'api/borders';  

  constructor(private http: Http) { }

  getBorders(): Border[] {
    return BORDERS;
  }

  create(name: string): void {
    // make http call
  }
}