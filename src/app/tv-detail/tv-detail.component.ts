import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { LoaderManagerService } from '../shared/services/loader-manager.service';

// import { Movie } from './models/movie-detail';

@Component({
  selector: 'tv-detail',
  templateUrl: './tv-detail.component.html',
  styleUrls: ['./tv-detail.component.scss']
})
export class TvDetailComponent implements OnInit {

  detailTv: any;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private loaderManagerService: LoaderManagerService) { }

  ngOnInit() {
    this.loaderManagerService.changeStatus(false);
    this.getTV();
  }

  // Retrieve tv-detail from server
  getTV() {
    this.route.data
        .subscribe((data: { detailTV: any }) => { console.log(data.detailTV); this.detailTv = data.detailTV; }, error =>  this.errorMessage = <any>error);
  }

}
