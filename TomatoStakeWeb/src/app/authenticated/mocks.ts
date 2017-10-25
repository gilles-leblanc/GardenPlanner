import { Plant } from './plant'
import { Border } from './border';
import { Job } from './job';

export const PLANTS: Plant[] = [
  { id: 1, name: "Geranium", locations: [] as Border[], notes: "", jobs: [] as Job[] },
  { id: 2, name: "Tulip", locations: [] as Border[], notes: "", jobs: [] as Job[] },
];

export const BORDERS: Border[] = [
  { id: 1, name: "Front border" },
  { id: 2, name: "Potager" },
];