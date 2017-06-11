import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() currentPage: number;
  @Input() totalPage: number;

  @Output() changePage = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  // Emit event load more movies
  loadMore(index) {
    this.changePage.emit(index);
  }

}
