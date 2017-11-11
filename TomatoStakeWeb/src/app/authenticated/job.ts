import { Border } from './border';

// A garden job/chore/activity
export class Job {
  id: number;
  name: string;  
  description: string;
  locations: Border[];
}