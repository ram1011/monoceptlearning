import { Component } from '@angular/core';
import { Accordion } from './components/accordion/accordion-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-challenges';
  public items = [
    {
      title: 'item1',
      content: 'body',
      isExpanded: false,
    },
    {
      title: 'item2',
      content: 'body',
      isExpanded: false,
    },
  ];
}
