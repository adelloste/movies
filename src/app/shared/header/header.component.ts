import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { SidenavService } from "../services/sidenav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() { }

  // Send message to subscribers via observable subject
  sidenav() {
    this.sidenavService.changeStatus();
  }

}
