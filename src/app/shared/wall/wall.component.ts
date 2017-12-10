import { 
  Component, 
  OnInit, 
  Input, 
  ChangeDetectionStrategy 
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WallComponent implements OnInit {

  @Input() items: string;
  @Input() section: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  onSelected(id: string) {
    // In base alla section passata dal componente padre effettuo la redirect
    this.section == "tv" && this.router.navigate(['/main/tv', id]);
  }

}
