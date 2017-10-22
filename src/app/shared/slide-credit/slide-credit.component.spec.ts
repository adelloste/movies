import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCreditComponent } from './slide-credit.component';

describe('SlideCreditComponent', () => {
  let component: SlideCreditComponent;
  let fixture: ComponentFixture<SlideCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
