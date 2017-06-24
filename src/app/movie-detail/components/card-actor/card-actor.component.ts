import { Component, OnInit, Input } from '@angular/core';

import { Cast } from '../../models/cast';

@Component({
  selector: 'card-actor',
  templateUrl: './card-actor.component.html',
  styleUrls: ['./card-actor.component.scss']
})
export class CardActorComponent implements OnInit {

  @Input() actor: Cast;

  constructor() { }

  ngOnInit() {
  }

}
