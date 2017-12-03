import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { SearchService } from '../../services/search.service';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import * as _ from 'lodash';

@Component({
  selector: 'modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent implements OnInit {

  searchForm: FormGroup;
  results: Array<any> = [];

  constructor(
    private bsModalRef: BsModalRef, 
    private fb: FormBuilder, 
    private searchService: SearchService
  ) {
    this.createForm();  
  }

  ngOnInit() { }

  createForm(): void {
    this.searchForm = this.fb.group({
      key: ['']
    });

    // Check the changes
    this.searchForm.valueChanges
        .debounceTime(300)        // wait 600ms after each keystroke before considering the key
        .distinctUntilChanged()   // ignore if next search query is same as previous
        .switchMap(query => this.searchService.search(query.key).catch(error => {
          this.results = [];
          return Observable.of<any>()
        }))
        .subscribe(
          (result) => {
            this.results = _.filter(result.results, function(o) {
              return o.media_type == "movie" || o.media_type == "tv"; 
            });

            console.log(this.results);
          },
          error =>  {
            this.results = <any>error;
          }
        );
  }

  close() {
    this.bsModalRef.hide();
  }
}
