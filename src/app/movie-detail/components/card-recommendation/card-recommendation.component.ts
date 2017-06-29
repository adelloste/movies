import { Component, OnInit, Input } from '@angular/core';

import { Recommendation } from '../../models/recommendation';

@Component({
  selector: 'card-recommendation',
  templateUrl: './card-recommendation.component.html',
  styleUrls: ['./card-recommendation.component.scss']
})
export class CardRecommendationComponent implements OnInit {

  @Input() recommendation: Recommendation;

  constructor() { }

  ngOnInit() {
  }

}
