import { Component } from '@angular/core';
import { FirstComponent } from './first-component/first-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FirstComponent],
  templateUrl: './app.html',
})
export class AppComponent {}