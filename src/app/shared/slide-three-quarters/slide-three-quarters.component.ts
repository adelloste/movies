import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'slide-three-quarters',
  templateUrl: './slide-three-quarters.component.html',
  styleUrls: ['./slide-three-quarters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideThreeQuartersComponent implements OnInit {

  @Input() url: string;
  @Input() param: string;

  constructor() { }

  ngOnInit() {
  }

}
