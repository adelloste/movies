import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { LoaderManagerService } from '../services/loader-manager.service';

@Component({
  selector: 'slide-three-quarters',
  templateUrl: './slide-three-quarters.component.html',
  styleUrls: ['./slide-three-quarters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideThreeQuartersComponent implements OnInit {

  @Input() url: string;
  @Input() param: string;

  constructor(private router: Router, private loaderManagerService: LoaderManagerService) { }

  ngOnInit() {
  }

  goDetail() {
    this.loaderManagerService.changeStatus(true);
    this.router.navigate([this.url]);
  }

}
