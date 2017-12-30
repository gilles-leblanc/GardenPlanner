import { Border } from './border';
import { Job } from './job';

export class Plant {
  id: number;
  name: string;
  locations: Border[];
  notes: string;
  jobs: Job[];

  constructor() {
    this.name = '';
    this.locations = [];
    this.jobs = [];
  }
}
