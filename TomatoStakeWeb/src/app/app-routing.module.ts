import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service';

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { GardenPlannerComponent } from './authenticated/garden-planner/garden-planner.component';
import { PlantsBordersComponent } from './authenticated/plants-borders/plants-borders.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'planner', component: GardenPlannerComponent, canActivate: [AuthGuard] },
  { path: 'plants-borders', component: PlantsBordersComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}