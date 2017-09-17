import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvWallTopRatedComponent } from './tv-wall-top-rated.component';

describe('TvWallTopRatedComponent', () => {
  let component: TvWallTopRatedComponent;
  let fixture: ComponentFixture<TvWallTopRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvWallTopRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvWallTopRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
