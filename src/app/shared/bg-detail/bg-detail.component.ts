import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bg-detail',
  templateUrl: './bg-detail.component.html',
  styleUrls: ['./bg-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BgDetailComponent implements OnInit {

  @Input() bg: string;

  constructor() { }

  ngOnInit() {
  }

}
