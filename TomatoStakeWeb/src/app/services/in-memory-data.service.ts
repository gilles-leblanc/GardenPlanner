import * as moment from 'moment';

import { Plant } from '../authenticated/plant';
import { Border } from '../authenticated/border';
import { Job } from '../authenticated/job';
import { Month, JobSchedule } from '../authenticated/jobSchedule';

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  public readonly borders: Border[];
  public readonly plants: Plant[];
  public readonly jobs: Job[];

  constructor() {
    this.borders = [
      { id: 1, name: 'Front border' },
      { id: 2, name: 'Potager' },
    ];

    this.plants = [
      { id: 1, name: 'Geranium', locations: [{ id: 1, name: 'Front border' }] as Border[], notes: '', jobs: [] as Job[] },
      { id: 2, name: 'Tulip', locations: [{ id: 1, name: 'Front border' }, { id: 2, name: 'Potager' }] as Border[],
        notes: '', jobs: [] as Job[] },
    ];

    const dateTimeNow = new Date();

    this.jobs = [
      { id: 1, name: 'Sow Carrots', locations: [{ id: 2, name: 'Potager' }] as Border[], description: 'Direct sow',
        schedule: new JobSchedule(moment(dateTimeNow).subtract(3, 'days'), moment(dateTimeNow).add(3, 'days')) },
      { id: 2, name: 'Fertilize', locations: [{ id: 1, name: 'Front border' }, { id: 2, name: 'Potager' }] as Border[],
        description: 'Fertilize the whole yard',
        schedule: new JobSchedule(moment(dateTimeNow).add(4, 'days'), moment(dateTimeNow).add(4, 'days')) },
      { id: 3, name: 'Cut Back Delphinium', locations: [] as Border[], description: '',
        schedule: new JobSchedule(moment(dateTimeNow).add(30, 'days'), moment(dateTimeNow).add(60, 'days')) },
      { id: 4, name: 'Sow Pumpkins', locations: [] as Border[], description: 'Sow indoors',
        schedule: new JobSchedule(moment(dateTimeNow).add(16, 'days'), moment(dateTimeNow).add(16, 'days')) },
      { id: 5, name: 'Apply wood chip mulch', locations: [] as Border[], description: '',
        schedule: new JobSchedule(moment(dateTimeNow).add(2, 'months'), moment(dateTimeNow).add(3, 'months')) },
      { id: 6, name: 'Prep garden', locations: [] as Border[], description: 'Remove winter protection from the garden, open beds',
        schedule: new JobSchedule(moment(dateTimeNow).subtract(4, 'months'), moment(dateTimeNow).subtract(4, 'months')) },
    ];
  }

  createDb() {
    return { this.borders };
  }

  createDb2() {
    const bordersCopy = this.borders;
    const plantsCopy = this.borders;
    const jobsCopy = this.jobs;

    return { bordersCopy, plantsCopy, jobsCopy };
  }
}
