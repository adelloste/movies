import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWallNowPlayingComponent } from './movie-wall-now-playing.component';

describe('MovieWallNowPlayingComponent', () => {
  let component: MovieWallNowPlayingComponent;
  let fixture: ComponentFixture<MovieWallNowPlayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWallNowPlayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWallNowPlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
