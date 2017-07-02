import { Component, OnInit }      from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();    
  }

  ngOnInit() { }

  createForm(): void {
    this.searchForm = this.fb.group({
      key: ['']
    });

    // Check the changes
    this.searchForm.valueChanges.subscribe(data => {
      
    })
  }

}
