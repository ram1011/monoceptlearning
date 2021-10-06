import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'budget-tracker';
  Categories = [
    { name: 'Food' },
    { name: 'Clothing' },
    { name: 'Rent' },
    { name: 'Medical' },
  ];
}
