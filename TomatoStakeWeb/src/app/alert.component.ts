// A component to display an error message to the user

import { Component, OnInit } from '@angular/core';

import { AlertService } from './services/alert.service';

@Component({
  moduleId: module.id,
  selector: 'alert',
  template: `
  <div *ngIf="isDisplayed" class="notification is-warning">
    <button class="delete"></button>
    {{message}}
  </div>`,
})
export class AlertComponent implements OnInit {
  private isDisplayed: boolean;
  private message: string;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert) => {
        if (!alert) {
            // clear alerts when an empty alert is received
            this.hide();
            return;
        }

        // add alert to array
        this.display(alert);
    });
  }

  display(message: string): void {
    this.isDisplayed = true;
    this.message = message;
  }

  hide(): void {
    this.isDisplayed = false;
    this.message = "";
  }
}