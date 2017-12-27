import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWallPopularComponent } from './movie-wall-popular.component';

describe('MovieWallPopularComponent', () => {
  let component: MovieWallPopularComponent;
  let fixture: ComponentFixture<MovieWallPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWallPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWallPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
