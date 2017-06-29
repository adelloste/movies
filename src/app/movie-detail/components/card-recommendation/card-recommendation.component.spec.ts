import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRecommendationComponent } from './card-recommendation.component';

describe('CardRecommendationComponent', () => {
  let component: CardRecommendationComponent;
  let fixture: ComponentFixture<CardRecommendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardRecommendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
