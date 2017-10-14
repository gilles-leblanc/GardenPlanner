import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { GardenPlannerComponent } from './authenticated/garden-planner/garden-planner.component';

import { AuthGuard } from './services/auth-guard.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    GardenPlannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
