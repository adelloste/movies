import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WallComponent implements OnInit {

  @Input() items: string;

  constructor() { }

  ngOnInit() {
  }

}
