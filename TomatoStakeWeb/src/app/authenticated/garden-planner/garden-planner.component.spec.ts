import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { JobSchedule, Due } from '../jobSchedule';
import { GardenPlannerComponent } from './garden-planner.component';
import { GardenJobComponent } from './garden-job.component';
import { NavbarComponent } from '../navbar/navbar.component';

import { AlertService } from '../../services/alert.service';
import { JobService } from '../services/job.service';


describe('GardenPlannerComponent', () => {
  let alertService: AlertService;
  let jobService: JobService;

  let comp: GardenPlannerComponent;
  let fixture: ComponentFixture<GardenPlannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpModule ],
      declarations: [ GardenPlannerComponent, GardenJobComponent, NavbarComponent ],
      providers:    [ AlertService, JobService ],
    });

    fixture = TestBed.createComponent(GardenPlannerComponent);
    comp = fixture.componentInstance;

    alertService = fixture.debugElement.injector.get(AlertService);
    jobService = fixture.debugElement.injector.get(JobService);
  });

  it('#getDueNow should return jobs that are due now', () => {
    const jobs = comp.getDueNow();
    expect(jobs.length).toBe(2);
  });
});
