import { Component, OnInit, Input } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef }     from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ModalVideoComponent } from "../../core/components/modal-video/modal-video.component";

@Component({
  selector: 'trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {

  @Input() media: any;

  bsModalRef : BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

  video() {
    this.bsModalRef            = this.modalService.show(ModalVideoComponent, {class: 'modal-dialog-custom'});
    this.bsModalRef.content.id = this.media.key;
  }

}
