import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDetailComponent } from './slider-detail.component';

describe('SliderDetailComponent', () => {
  let component: SliderDetailComponent;
  let fixture: ComponentFixture<SliderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
