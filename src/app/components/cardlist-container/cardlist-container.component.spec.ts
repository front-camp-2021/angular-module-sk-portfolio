import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardlistContainerComponent } from './cardlist-container.component';

describe('CardlistContainerComponent', () => {
  let component: CardlistContainerComponent;
  let fixture: ComponentFixture<CardlistContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardlistContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardlistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
