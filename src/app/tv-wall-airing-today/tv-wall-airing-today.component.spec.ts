import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvWallAiringTodayComponent } from './tv-wall-airing-today.component';

describe('TvWallAiringTodayComponent', () => {
  let component: TvWallAiringTodayComponent;
  let fixture: ComponentFixture<TvWallAiringTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvWallAiringTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvWallAiringTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
