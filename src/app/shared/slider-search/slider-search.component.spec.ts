import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSearchComponent } from './slider-search.component';

describe('SliderSearchComponent', () => {
  let component: SliderSearchComponent;
  let fixture: ComponentFixture<SliderSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
