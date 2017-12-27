import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideTwoThirdsComponent } from './slide-two-thirds.component';

describe('SlideTwoThirdsComponent', () => {
  let component: SlideTwoThirdsComponent;
  let fixture: ComponentFixture<SlideTwoThirdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideTwoThirdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideTwoThirdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
