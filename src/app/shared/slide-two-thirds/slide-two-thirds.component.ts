import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slide-two-thirds',
  templateUrl: './slide-two-thirds.component.html',
  styleUrls: ['./slide-two-thirds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideTwoThirdsComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
