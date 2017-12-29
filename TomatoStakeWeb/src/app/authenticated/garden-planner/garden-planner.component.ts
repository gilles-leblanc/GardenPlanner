// The agenda/calendar component which displays a list of garden jobs

import { Component, OnInit } from '@angular/core';

import { ModalHandler } from '../modal';
import { Border } from '../border';
import { Job } from '../job';
import { Due, JobSchedule } from '../jobSchedule';

import { GardenJobComponent } from './garden-job.component';

import { AlertService } from '../../services/alert.service';
import { BorderService } from '../services/border.service';
import { JobService } from '../services/job.service';
import { MonthService } from '../services/month.service';

@Component({
  selector: 'ts-planner',
  templateUrl: './garden-planner.component.html',
  styleUrls: ['./garden-planner.component.css']
})
export class GardenPlannerComponent extends ModalHandler implements OnInit {
  jobs: Job[];
  borders: Border[];
  months: (number | string)[][];
  showMonth: boolean;

  constructor(private alertService: AlertService,
              private jobService: JobService,
              private borderService: BorderService,
              private monthService: MonthService) {
    super();
    this.registerModal('addJob');
  }

  ngOnInit(): void {
    this.getJobs();
    this.getBorders();

    this.showMonth = true;
    this.months = this.monthService.getMonths();
  }

  onAnchorClick(location: string): void {
    console.log(location);
    window.location.hash = location;
  }

  getJobs(): void {
    this.jobs = [];
    this.jobService.getJobs()
                   .subscribe(jobs => jobs.forEach(job => this.jobs.push(new Job(job.id,
                                                                                 job.name,
                                                                                 job.description,
                                                                                 job.locations,
                                                                                 new JobSchedule(job.schedule.startDate,
                                                                                                 job.schedule.endDate)))));
  }

  getBorders(): void {
    this.borders = [];
    this.borderService.getBorders().subscribe(borders => this.borders = borders);
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
