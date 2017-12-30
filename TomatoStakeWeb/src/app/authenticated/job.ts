import * as moment from 'moment';

import { Border } from './border';
import { Month, JobSchedule } from './jobSchedule';

// A garden job/chore/activity
export class Job {
  id: number;
  name: string;
  description: string;
  locations: Border[];
  schedule: JobSchedule;

  constructor(id, name, description, locations, schedule) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.locations = locations === null ? [] : locations;
    this.schedule = new JobSchedule(moment(schedule.startDate), moment(schedule.endDate));
  }
}
