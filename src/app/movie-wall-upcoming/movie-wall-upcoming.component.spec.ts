import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWallUpcomingComponent } from './movie-wall-upcoming.component';

describe('MovieWallUpcomingComponent', () => {
  let component: MovieWallUpcomingComponent;
  let fixture: ComponentFixture<MovieWallUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWallUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWallUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
