import { Component, Input, OnInit } from '@angular/core';
import { Accordion } from './accordion-item';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() public items: Accordion[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
  }

}
