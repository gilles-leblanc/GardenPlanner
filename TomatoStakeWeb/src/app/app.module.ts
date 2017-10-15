import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { GardenPlannerComponent } from './authenticated/garden-planner/garden-planner.component';
import { PlantsBordersComponent } from './authenticated/plants-borders/plants-borders.component';
import { NavbarComponent } from './authenticated/navbar/navbar.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    GardenPlannerComponent,
    PlantsBordersComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [ AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
