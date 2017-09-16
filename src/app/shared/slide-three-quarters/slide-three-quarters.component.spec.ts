import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideThreeQuartersComponent } from './slide-three-quarters.component';

describe('SlideThreeQuartersComponent', () => {
  let component: SlideThreeQuartersComponent;
  let fixture: ComponentFixture<SlideThreeQuartersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideThreeQuartersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideThreeQuartersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
