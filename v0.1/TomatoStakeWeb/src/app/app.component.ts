import { Component } from '@angular/core';

@Component({
  selector: 'ts-app-root',
  template: `
  <ts-alert></ts-alert>
  <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'Tomato Stake';
}
