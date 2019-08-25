import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pulse-loader-example';

  colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6'];
  widths = ['6px', '13px', '20px', '25px'];
  pulseList = [];

  constructor() {
    this.colors.forEach(color => {
      this.pulseList.push({ color });
    });
  }
}
