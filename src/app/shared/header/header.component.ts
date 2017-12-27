import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { AuthService }           from "../../login/services/auth.service";
import { StorageManagerService } from "../../core/services/storage-manager.service";
import { SidenavService }        from '../services/sidenav.service';
import { ModalSearchComponent }  from "../../core/components/modal-search/modal-search.component";

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef }     from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(
    private router: Router,
    private authService: AuthService, 
    private storageManagerService: StorageManagerService, 
    private sidenavService: SidenavService,
    private modalService: BsModalService
  ) { }

  ngOnInit() { }

  // Send message to subscribers via observable subject
  sidenav() {
    this.sidenavService.changeStatus();
  }

  search() {
    this.bsModalRef = this.modalService.show(ModalSearchComponent, {class: 'modal-dialog-custom'});
  }

  logout() {
    // Signout with Firebase
    this.authService.signout().then((data) => {
      // Delete user from storage
      this.storageManagerService.delete("user");
      // Redirect to login
      this.router.navigate(['/login']); 
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
