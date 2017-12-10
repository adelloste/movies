import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[customFocus]'
})
export class AutofocusDirective implements OnInit {

  constructor(private elementRef: ElementRef) { };
  
  ngOnInit(): void {
    setTimeout(() => { this.elementRef.nativeElement.focus(); }, 1);
  }

}
