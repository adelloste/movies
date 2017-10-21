import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {

  @Input() detail: any;

  constructor() { }

  ngOnInit() {
  }

}
