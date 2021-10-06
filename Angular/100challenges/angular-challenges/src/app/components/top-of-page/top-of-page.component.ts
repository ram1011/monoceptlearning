import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent implements OnInit {

  public isShown = false;

  constructor(public viewportScroller: ViewportScroller) { }

  // tslint:disable-next-line:typedef
  @HostListener('window:scroll') onWindowScroll() {
    console.log(this.viewportScroller);
    // tslint:disable-next-line:no-debugger
    debugger;
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  public goToTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
  }

}
