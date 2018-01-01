import { Component, OnInit } from '@angular/core';

import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss']
})
export class ModalVideoComponent implements OnInit {

  id: string;

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() { }

  close() {
    this.bsModalRef.hide();
  }
}
