import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../../models/movie';

@Component({
  selector: 'search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss']
})
export class SearchPopupComponent implements OnInit {

  @Input() matchedMovies: Array<Movie>;

  constructor() { }

  ngOnInit() { }

}
