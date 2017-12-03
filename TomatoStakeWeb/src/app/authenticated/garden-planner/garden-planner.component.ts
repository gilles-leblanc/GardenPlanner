// The agenda/calendar component which displays a list of garden jobs

import { Component, OnInit } from '@angular/core';

import { ModalHandler } from '../modal';
import { Job } from '../job';
import { Due } from '../jobSchedule';

import { GardenJobComponent } from './garden-job.component';

import { AlertService } from '../../services/alert.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'ts-planner',
  templateUrl: './garden-planner.component.html',
  styleUrls: ['./garden-planner.component.css']
})
export class GardenPlannerComponent extends ModalHandler implements OnInit {
  jobs: Job[];

  constructor(private alertService: AlertService,
              private jobService: JobService) {
    super();
    this.registerModal('addJob');
  }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobs = this.jobService.getJobs();
  }

  getDueNow(): Job[] {
    return this.jobs.filter(job => job.schedule.isDueWhen() === Due.Now);
  }

  getDueSoon(): Job[] {
    return this.jobs.filter(job => job.schedule.isDueWhen() === Due.Soon);
  }

  getDueLater(): Job[] {
    return this.jobs.filter(job => job.schedule.isDueWhen() === Due.Later);
  }

  getDuePast(): Job[] {
    return this.jobs.filter(job => job.schedule.isDueWhen() === Due.Past);
  }

  onRemoved(job: Job): void {
    // ???
  }
}
