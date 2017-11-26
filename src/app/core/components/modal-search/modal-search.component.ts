import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'modal-search',
  templateUrl: './modal-search.component.html',
  styleUrls: ['./modal-search.component.scss']
})
export class ModalSearchComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() { }

  close() {
    this.bsModalRef.hide();
  }
}
