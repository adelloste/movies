import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter,
  ChangeDetectionStrategy 
} from '@angular/core';

@Component({
  selector: 'slide-search',
  templateUrl: './slide-search.component.html',
  styleUrls: ['./slide-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SlideSearchComponent implements OnInit {

  @Input() item: any;
  
  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  go(type: string, id: string) {
    this.selected.emit({
      "type": type, 
      "id"  : id 
    });
  }
}
