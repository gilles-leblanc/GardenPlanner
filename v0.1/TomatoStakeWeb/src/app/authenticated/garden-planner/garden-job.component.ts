import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Job } from '../job';

@Component({
  selector: 'div.garden-job',
  templateUrl: './garden-job.component.html',
})
export class GardenJobComponent {
  @Input() job: Job;
  @Output() onRemoved = new EventEmitter<Job>();

  // Remove a job from the schedule
  removeJob(job: Job): void {
    this.onRemoved.emit(job);
  }
}
