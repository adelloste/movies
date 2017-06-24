import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardActorComponent } from './card-actor.component';

describe('CardActorComponent', () => {
  let component: CardActorComponent;
  let fixture: ComponentFixture<CardActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
