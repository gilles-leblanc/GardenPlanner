// The agenda/calendar component which displays a list of garden jobs

import { Component } from '@angular/core';
import { ModalHandler } from '../modal';

@Component({
  selector: 'planner',
  templateUrl: './garden-planner.component.html',
  styleUrls: [ './garden-planner.component.css' ]
})
export class GardenPlannerComponent extends ModalHandler {
  
}