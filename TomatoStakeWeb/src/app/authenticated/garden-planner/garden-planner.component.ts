// The agenda/calendar component which displays a list of garden jobs

import { Component, OnInit } from '@angular/core';

import { ModalHandler } from '../modal';
import { Job } from '../job';

import { GardenJobComponent } from './garden-job.component';

import { AlertService } from '../../services/alert.service';
import { JobService } from '../services/job.service';

@Component({
  selector: 'planner',
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
}
