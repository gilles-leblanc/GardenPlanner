import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Job } from '../job';

import { JOBS } from '../mocks';

@Injectable()
export class JobService {
  private jobsUrl = 'api/jobs';

  constructor(private http: Http) { }

  getJobs(): Job[] {
    return JOBS;
  }
}
