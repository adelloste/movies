import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSearchComponent } from './slide-search.component';

describe('SlideSearchComponent', () => {
  let component: SlideSearchComponent;
  let fixture: ComponentFixture<SlideSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
