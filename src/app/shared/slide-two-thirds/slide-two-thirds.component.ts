import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slide-two-thirds',
  templateUrl: './slide-two-thirds.component.html',
  styleUrls: ['./slide-two-thirds.component.scss']
})
export class SlideTwoThirdsComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
