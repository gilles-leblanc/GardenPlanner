import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// import 'rxjs/add/operator/toPromise';

import { Border } from '../border';

@Injectable()
export class BorderService {
  private bordersUrl = 'api/borders';

  constructor(private http: HttpClient) { }

  getBorders(): Observable<Border[]> {
    return this.http.get<Border[]>(this.bordersUrl);
  }

  create(name: string): void {
    // make http call
  }
}
