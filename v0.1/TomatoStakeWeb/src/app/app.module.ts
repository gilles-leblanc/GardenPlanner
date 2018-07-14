import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// in-memory web api imports
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { GardenPlannerComponent } from './authenticated/garden-planner/garden-planner.component';
import { GardenJobComponent } from './authenticated/garden-planner/garden-job.component';
import { PlantsBordersComponent } from './authenticated/plants-borders/plants-borders.component';
import { PlantDisplayRowComponent } from './authenticated/plants-borders/plant-display-row.component';
import { PlantEditRowComponent } from './authenticated/plants-borders/plant-edit-row.component';
import { AlertComponent } from './alert.component';
import { NavbarComponent } from './authenticated/navbar/navbar.component';

import { Mod3Pipe } from './authenticated/pipes/mod3';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AlertService } from './services/alert.service';
import { PlantService } from './authenticated/services/plant.service';
import { BorderService } from './authenticated/services/border.service';
import { JobService } from './authenticated/services/job.service';
import { MonthService } from './authenticated/services/month.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    GardenPlannerComponent,
    GardenJobComponent,
    PlantsBordersComponent,
    PlantDisplayRowComponent,
    PlantEditRowComponent,
    AlertComponent,
    NavbarComponent,
    Mod3Pipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [ AuthService, AuthGuard, AlertService, PlantService, BorderService, JobService, MonthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
