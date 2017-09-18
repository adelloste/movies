import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvWallPopularComponent } from './tv-wall-popular.component';

describe('TvWallPopularComponent', () => {
  let component: TvWallPopularComponent;
  let fixture: ComponentFixture<TvWallPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvWallPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvWallPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
