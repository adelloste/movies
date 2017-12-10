import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter,
  ChangeDetectionStrategy 
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slide-two-thirds',
  templateUrl: './slide-two-thirds.component.html',
  styleUrls: ['./slide-two-thirds.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideTwoThirdsComponent implements OnInit {

  @Input() item: any;

  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() { }

  // Get current route and go to detail
  go(id: string) {
    this.selected.emit(id);
    // this.router.url.includes("tv") && this.router.navigate(['/main/tv', id]);
  }

}
