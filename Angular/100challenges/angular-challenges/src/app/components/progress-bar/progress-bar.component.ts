import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  constructor() {}

  @Input() value = 0;
  @Input() max = 100;
  // tslint:disable-next-line:typedef
  updateprogress() {
    this.value -= 10;
  }
}
