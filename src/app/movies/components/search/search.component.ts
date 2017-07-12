import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import { Movies }        from '../../models/movies';
import { Movie }         from '../../models/movie';
import { SearchService } from '../../services/search.service';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchForm: FormGroup;
  private errorMessage: string;
  private matchedMovies: Array<Movie>;

  constructor(private fb: FormBuilder, private searchService: SearchService) {
    this.createForm();    
  }

  createForm(): void {
    this.searchForm = this.fb.group({
      key: ['']
    });

    // Check the changes
    this.searchForm.valueChanges
        .debounceTime(300)        // wait 600ms after each keystroke before considering the key
        .distinctUntilChanged()   // ignore if next search query is same as previous
        .switchMap(query => this.searchService.searchMovie(query.key).catch(error => {
          this.matchedMovies = [];
          return Observable.of<Movies>()
        }))
        .subscribe(
          (result) => {
            this.matchedMovies = result["results"];
          },
          error =>  {
            this.errorMessage = <any>error;
          }
        );
  }

  ngOnInit() { }

}
