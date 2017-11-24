import { Border } from './border';
import { Month, JobSchedule, FixedDate, FixedMonth, DateRange, MonthRange } from './jobSchedule';

// A garden job/chore/activity
export class Job {
  id: number;
  name: string;
  description: string;
  locations: Border[];
  schedule: JobSchedule;
}
