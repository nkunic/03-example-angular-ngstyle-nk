import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  studentId: number;
  studentStatus: string;

  constructor() {
    this.studentStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.studentStatus === 'online' ? 'green' : 'red';
  }
}
