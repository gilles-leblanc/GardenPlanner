import { InMemoryDataService } from '../../services/in-memory-data.service';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Border } from '../border';
import { Job } from '../job';
import { JobSchedule, Due } from '../jobSchedule';
import { GardenPlannerComponent } from './garden-planner.component';
import { GardenJobComponent } from './garden-job.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Mod3Pipe } from '../pipes/mod3';

import { AlertService } from '../../services/alert.service';
import { BorderService } from '../services/border.service';
import { JobService } from '../services/job.service';


describe('GardenPlannerComponent', () => {
  let alertService: AlertService;
  let borderService: BorderService;
  let jobService: JobService;

  let comp: GardenPlannerComponent;
  let fixture: ComponentFixture<GardenPlannerComponent>;

  let borderServiceStub: {
    getBorders(): Observable<Border[]>;
  };

  beforeEach(() => {
    borderServiceStub = {
      getBorders(): Observable<Border[]> {
        const inMemoryDataService = new InMemoryDataService();
        return Observable.of(inMemoryDataService.borders);
      }
    };

    let jobServiceStub: {
      getJobs(): Observable<Job[]>;
    };

    jobServiceStub = {
      getJobs(): Observable<Job[]> {
        const inMemoryDataService = new InMemoryDataService();
        return Observable.of(inMemoryDataService.jobs);
      }
    };

    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientModule ],
      declarations: [ GardenPlannerComponent, GardenJobComponent, NavbarComponent, Mod3Pipe ],
      providers:    [ AlertService, {provide: BorderService, useValue: borderServiceStub},
                      {provide: JobService, useValue: jobServiceStub} ],
    });

    fixture = TestBed.createComponent(GardenPlannerComponent);
    comp = fixture.componentInstance;

    alertService = fixture.debugElement.injector.get(AlertService);
    borderService = fixture.debugElement.injector.get(BorderService);
    jobService = fixture.debugElement.injector.get(JobService);
  });

  it('#getDueNow should return jobs that are due now', () => {
    fixture.detectChanges();
    const jobs = comp.getDueNow();
    console.log(jobs.length);
    expect(jobs.length).toBe(2);
  });

  it('#getDueSoon should return jobs that are due soon', () => {
    fixture.detectChanges();
    const jobs = comp.getDueSoon();
    expect(jobs.length).toBe(2);
  });

  it('#getDueLater should return jobs that are due later', () => {
    fixture.detectChanges();
    const jobs = comp.getDueLater();
    expect(jobs.length).toBe(1);
  });

  it('#getDuePast should return jobs that are past due', () => {
    fixture.detectChanges();
    const jobs = comp.getDuePast();
    expect(jobs.length).toBe(1);
  });

  // should not display jobs more than ... x time
});
