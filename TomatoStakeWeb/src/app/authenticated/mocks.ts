import { Plant } from './plant'
import { Border } from './border';
import { Job } from './job';
import { Month, FixedMonth } from './jobSchedule';

export const PLANTS: Plant[] = [
  { id: 1, name: "Geranium", locations: [] as Border[], notes: "", jobs: [] as Job[] },
  { id: 2, name: "Tulip", locations: [] as Border[], notes: "", jobs: [] as Job[] },
];

export const BORDERS: Border[] = [
  { id: 1, name: "Front border" },
  { id: 2, name: "Potager" },
];

export const JOBS: Job[] = [
  { id: 1, name: "Sow Carrots", locations: [] as Border[], description: "Direct sow", schedule: Month.January },
  { id: 2, name: "Fertilize", locations: [] as Border[], description: "Fertilize the whole yard", schedule: Month.January },
  { id: 3, name: "Cut Back Delphinium", locations: [] as Border[], description: "", schedule: Month.January },
  { id: 4, name: "Sow Carrots", locations: [] as Border[], description: "Direct sow", schedule: Month.January },
  { id: 5, name: "Sow Carrots", locations: [] as Border[], description: "Direct sow", schedule: Month.January },
];