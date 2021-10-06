import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
})
export class StarRatingsComponent {
  constructor() {}
  // tslint:disable-next-line:typedef-whitespace
  @Input() rating = 5;
  get fullStarrating(): number[] {
    const totalfullstar = Math.floor(this.rating);
    return Array(totalfullstar).fill(0);
  }
  get halfstar(): boolean {
    // tslint:disable-next-line:no-debugger
    const ishalfstar =
      this.rating - Math.floor(this.rating) > 0.5 && this.rating <= 5;
    return ishalfstar;
  }
  get emptyStars(): number[] {
    const highestrating = 5 ;
    const emptystars = Math.floor(highestrating - this.rating );
    return Array(emptystars).fill(0);
  }
}
