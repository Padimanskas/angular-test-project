import { Component } from '@angular/core';

import { Fire2Service } from './services/fire2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Fire2Service]
})
export class AppComponent {}
