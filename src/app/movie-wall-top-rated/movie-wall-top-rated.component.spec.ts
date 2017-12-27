import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWallTopRatedComponent } from './movie-wall-top-rated.component';

describe('MovieWallTopRatedComponent', () => {
  let component: MovieWallTopRatedComponent;
  let fixture: ComponentFixture<MovieWallTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWallTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWallTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
