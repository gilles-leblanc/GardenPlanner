import { Component, EventEmitter, Input } from '@angular/core';

import { Job } from '../job';

@Component({
  selector: 'div.garden-job',
  templateUrl: './garden-job.component.html',
  // styles: [`.clickable { cursor: pointer; } `]
})
export class GardenJobComponent {
  @Input() job: Job;
  
  
}