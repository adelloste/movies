import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvWallOnTheAirComponent } from './tv-wall-on-the-air.component';

describe('TvWallOnTheAirComponent', () => {
  let component: TvWallOnTheAirComponent;
  let fixture: ComponentFixture<TvWallOnTheAirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvWallOnTheAirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvWallOnTheAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
