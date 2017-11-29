import * as moment from 'moment';

import { Plant } from './plant';
import { Border } from './border';
import { Job } from './job';
import { Month, JobSchedule } from './jobSchedule';

export const PLANTS: Plant[] = [
  { id: 1, name: 'Geranium', locations: [] as Border[], notes: '', jobs: [] as Job[] },
  { id: 2, name: 'Tulip', locations: [] as Border[], notes: '', jobs: [] as Job[] },
];

export const BORDERS: Border[] = [
  { id: 1, name: 'Front border' },
  { id: 2, name: 'Potager' },
];

export const JOBS: Job[] = [
  { id: 1, name: 'Sow Carrots', locations: [] as Border[], description: 'Direct sow',
    schedule: new JobSchedule(moment(new Date()).subtract(3, 'days'), moment(new Date()).add(3, 'days')) },
  { id: 2, name: 'Fertilize', locations: [] as Border[], description: 'Fertilize the whole yard',
    schedule: new JobSchedule(moment(new Date()).add(4, 'days'), moment(new Date()).add(4, 'days')) },
  { id: 3, name: 'Cut Back Delphinium', locations: [] as Border[], description: '',
    schedule: new JobSchedule(moment(new Date()).add(1, 'months'), moment(new Date()).add(2, 'months')) },
  { id: 4, name: 'Sow Pumpkins', locations: [] as Border[], description: 'Sow indoors',
    schedule: new JobSchedule(moment(new Date()).add(16, 'days'), moment(new Date()).add(16, 'days')) },
  { id: 5, name: 'Apply wood chip mulch', locations: [] as Border[], description: '',
    schedule: new JobSchedule(moment(new Date()).add(2, 'months'), moment(new Date()).add(3, 'months')) },
  { id: 6, name: 'Prep garden', locations: [] as Border[], description: 'Remove winter protection from the garden, open beds',
    schedule: new JobSchedule(moment(new Date()).subtract(4, 'months'), moment(new Date()).subtract(4, 'months')) },
];
