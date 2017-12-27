import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter,
  ChangeDetectionStrategy 
} from '@angular/core';

@Component({
  selector: 'slide-credit',
  templateUrl: './slide-credit.component.html',
  styleUrls: ['./slide-credit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideCreditComponent implements OnInit {

  @Input() item: any;

  @Output() selected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  go(id: string) {
    this.selected.emit(id);
  }

}
