import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slide-credit',
  templateUrl: './slide-credit.component.html',
  styleUrls: ['./slide-credit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideCreditComponent implements OnInit {

  @Input() item: any;

  constructor() { }

  ngOnInit() { }

}
