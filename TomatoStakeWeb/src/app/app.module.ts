import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { GardenPlannerComponent } from './authenticated/garden-planner/garden-planner.component';
import { PlantsBordersComponent } from './authenticated/plants-borders/plants-borders.component';
import { AlertComponent } from './alert.component';
import { NavbarComponent } from './authenticated/navbar/navbar.component';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { AlertService } from './services/alert.service';
import { PlantService } from './authenticated/services/plant.service';
import { BorderService } from './authenticated/services/border.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    GardenPlannerComponent,
    PlantsBordersComponent,
    AlertComponent,
    NavbarComponent,
  ],
  imports: [    
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [ AuthService, AuthGuard, AlertService, PlantService, BorderService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
