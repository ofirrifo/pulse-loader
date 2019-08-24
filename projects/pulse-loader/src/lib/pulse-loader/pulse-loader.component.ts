import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-pulse-loader',
  templateUrl: './pulse-loader.component.html',
  styleUrls: ['./pulse-loader.component.scss']
})
export class PulseLoaderComponent {
  @Input() color = 'red';
  @Input() width = '25px';
}
